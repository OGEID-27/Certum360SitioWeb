import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  @Input() revealVariant: RevealVariant = 'up';
  @Input() revealDelay = '0ms';

  @HostBinding('class.reveal') readonly revealClass = true;
  @HostBinding('class.is-visible') isVisible = false;
  @HostBinding('class.reveal-left') get isLeft(): boolean {
    return this.revealVariant === 'left';
  }
  @HostBinding('class.reveal-right') get isRight(): boolean {
    return this.revealVariant === 'right';
  }
  @HostBinding('class.reveal-scale') get isScale(): boolean {
    return this.revealVariant === 'scale';
  }
  @HostBinding('style.--reveal-delay') get delayStyle(): string {
    return this.revealDelay;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.isVisible = true;
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsObserver = 'IntersectionObserver' in window;

    if (reduceMotion || !supportsObserver) {
      this.isVisible = true;
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        this.isVisible = true;
        this.observer?.disconnect();
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
