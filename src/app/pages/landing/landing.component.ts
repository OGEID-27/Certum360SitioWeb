import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import {
  ArrowRight,
  BadgeCheck,
  BadgeQuestionMark,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Eye,
  Factory,
  FileCheck,
  Fingerprint,
  Globe2,
  HeartPulse,
  Landmark,
  LockKeyhole,
  LucideAngularModule,
  Menu,
  MessageCircle,
  Moon,
  Network,
  Radar,
  Rocket,
  Scale,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Truck,
  UsersRound,
  Workflow,
  X,
} from 'lucide-angular';
import { ScrollRevealDirective } from './scroll-reveal.directive';

type LandingIcon = typeof ShieldCheck;
type ThemeMode = 'light' | 'dark';

type AnchorLink = {
  readonly label: string;
  readonly href: string;
};

type ActionLink = AnchorLink & {
  readonly variant: 'primary' | 'secondary';
};

type Accent =
  | 'accent-blue'
  | 'accent-cyan'
  | 'accent-violet'
  | 'accent-emerald'
  | 'accent-indigo'
  | 'accent-amber';

type IconItem = {
  readonly title: string;
  readonly description: string;
  readonly icon: LandingIcon;
  readonly accent: Accent;
};

type SimpleIconItem = {
  readonly title: string;
  readonly icon: LandingIcon;
  readonly accent: Accent;
};

type SolutionItem = {
  readonly title: string;
  readonly description: string;
  readonly listLabel: string;
  readonly items: readonly string[];
  readonly benefit: string;
  readonly icon: LandingIcon;
  readonly accent: Accent;
  readonly featured?: boolean;
};

type ProcessStep = {
  readonly step: string;
  readonly title: string;
  readonly description: string;
};

type PrivacySection = {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly items: readonly string[];
};

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  readonly ArrowRight = ArrowRight;
  readonly BarChart3 = BarChart3;
  readonly BadgeQuestionMark = BadgeQuestionMark;
  readonly Building2 = Building2;
  readonly ChevronDown = ChevronDown;
  readonly CircleCheck = CircleCheck;
  readonly ClipboardCheck = ClipboardCheck;
  readonly Globe2 = Globe2;
  readonly LockKeyhole = LockKeyhole;
  readonly Menu = Menu;
  readonly MessageCircle = MessageCircle;
  readonly Moon = Moon;
  readonly Network = Network;
  readonly Radar = Radar;
  readonly Rocket = Rocket;
  readonly ShieldCheck = ShieldCheck;
  readonly Sparkles = Sparkles;
  readonly Sun = Sun;
  readonly UsersRound = UsersRound;
  readonly Workflow = Workflow;
  readonly X = X;

  isScrolled = false;
  isMobileMenuOpen = false;
  currentTheme: ThemeMode = 'light';

  readonly navItems: readonly AnchorLink[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Industrias', href: '#industrias' },
    { label: 'Contacto', href: '#contacto' },
  ];

  readonly heroActions: readonly ActionLink[] = [
    { label: 'Solicitar Demo', href: '#contacto', variant: 'primary' },
    { label: 'Conocer Soluciones', href: '#soluciones', variant: 'secondary' },
  ];

  readonly impactStatements: readonly string[] = [
    'Las organizaciones ya no solo deben preocuparse por sus riesgos internos.',
    'Hoy, cada proveedor, aliado o tercero representa una extensión de su reputación, operación y cumplimiento.',
    'CERTUM360 nace para brindar a las empresas una visión integral de su ecosistema empresarial, permitiendo tomar decisiones más seguras, estratégicas y trazables.',
  ];

  readonly whatWeDoItems: readonly SimpleIconItem[] = [
    { title: 'Evaluar proveedores y terceros', icon: SearchCheck, accent: 'accent-blue' },
    { title: 'Gestionar expedientes digitales', icon: FileCheck, accent: 'accent-cyan' },
    { title: 'Reducir riesgos reputacionales', icon: ShieldCheck, accent: 'accent-violet' },
    { title: 'Fortalecer controles internos', icon: ClipboardCheck, accent: 'accent-emerald' },
    { title: 'Validar cumplimiento documental', icon: BadgeCheck, accent: 'accent-indigo' },
    { title: 'Generar evidencia auditable', icon: LockKeyhole, accent: 'accent-amber' },
    { title: 'Automatizar procesos operativos', icon: Workflow, accent: 'accent-blue' },
    { title: 'Mejorar trazabilidad organizacional', icon: Radar, accent: 'accent-cyan' },
  ];

  readonly solutions: readonly SolutionItem[] = [
    {
      title: 'Evaluación Integral de Proveedores',
      description: 'Evaluamos proveedores y terceros mediante modelos integrales de riesgo, cumplimiento y capacidad operativa.',
      listLabel: 'Incluye',
      items: [
        'Due Diligence',
        'Validación documental',
        'Riesgo reputacional',
        'Riesgo fiscal',
        'Riesgo legal',
        'Validación operativa',
        'Visitas físicas',
        'Screening en listas negras',
        'Evaluación ESG',
        'Monitoreo continuo',
      ],
      benefit: 'Decisiones más seguras y reducción de riesgos operativos, financieros y reputacionales.',
      icon: ShieldCheck,
      accent: 'accent-blue',
      featured: true,
    },
    {
      title: 'Gestión Inteligente de Expedientes',
      description: 'Centralizamos expedientes empresariales en una plataforma segura, trazable y auditable.',
      listLabel: 'Funcionalidades',
      items: [
        'Expediente digital',
        'Control documental',
        'Alertas automáticas',
        'Versionamiento',
        'Evidencia auditable',
        'Workflows de aprobación',
        'Accesos por perfil',
        'Dashboards operativos',
      ],
      benefit: 'Mayor control documental y reducción de tiempos operativos.',
      icon: FileCheck,
      accent: 'accent-cyan',
    },
    {
      title: 'Background Check y Validaciones',
      description: 'Realizamos validaciones de integridad y confianza para colaboradores, proveedores y socios comerciales.',
      listLabel: 'Incluye',
      items: [
        'Listas negras',
        'OFAC',
        'PEP',
        'Buró de crédito',
        'Demandas',
        'Riesgo reputacional',
        'Validación académica',
        'Validación laboral',
      ],
      benefit: 'Prevención de fraude, corrupción y riesgos reputacionales.',
      icon: SearchCheck,
      accent: 'accent-violet',
    },
    {
      title: 'Compliance y Gobierno Corporativo',
      description: 'Fortalecemos la cultura de cumplimiento mediante herramientas y modelos alineados a mejores prácticas internacionales.',
      listLabel: 'Incluye',
      items: [
        'Línea ética',
        'Canal de denuncias',
        'Diagnósticos de cumplimiento',
        'ISO 37001',
        'ISO 9001',
        'TPRM',
        'Auditorías',
        'Controles internos',
      ],
      benefit: 'Organizaciones más transparentes, resilientes y preparadas para auditorías.',
      icon: Scale,
      accent: 'accent-emerald',
    },
    {
      title: 'Diagnóstico de Madurez Empresarial',
      description: 'Evaluamos el nivel de madurez organizacional para detectar riesgos, oportunidades y áreas de mejora.',
      listLabel: 'Evaluamos',
      items: [
        'Compras',
        'RH',
        'Finanzas',
        'Tecnología',
        'Compliance',
        'Seguridad',
        'Gobierno corporativo',
        'Operación',
      ],
      benefit: 'Mayor eficiencia y claridad estratégica.',
      icon: BarChart3,
      accent: 'accent-amber',
    },
  ];

  readonly differentiators: readonly IconItem[] = [
    {
      title: 'Evaluación real, no solo documental',
      description: 'No nos limitamos a revisar documentos. Analizamos contexto, operación y exposición real del tercero.',
      icon: SearchCheck,
      accent: 'accent-blue',
    },
    {
      title: 'Visión 360°',
      description: 'Integramos cumplimiento, operación, reputación y riesgo en una sola evaluación.',
      icon: Radar,
      accent: 'accent-cyan',
    },
    {
      title: 'Inteligencia empresarial',
      description: 'Convertimos información dispersa en decisiones estratégicas.',
      icon: BarChart3,
      accent: 'accent-violet',
    },
    {
      title: 'Trazabilidad total',
      description: 'Cada validación, documento y proceso queda registrado y auditable.',
      icon: Fingerprint,
      accent: 'accent-emerald',
    },
    {
      title: 'Tecnología + consultoría',
      description: 'Combinamos plataforma tecnológica con experiencia especializada.',
      icon: Workflow,
      accent: 'accent-indigo',
    },
    {
      title: 'Adaptabilidad',
      description: 'Nuestros modelos se ajustan a cada industria y necesidad empresarial.',
      icon: Network,
      accent: 'accent-amber',
    },
  ];

  readonly industries: readonly SimpleIconItem[] = [
    { title: 'Financiero', icon: Landmark, accent: 'accent-blue' },
    { title: 'Retail', icon: BriefcaseBusiness, accent: 'accent-cyan' },
    { title: 'Manufactura', icon: Factory, accent: 'accent-violet' },
    { title: 'Salud', icon: HeartPulse, accent: 'accent-emerald' },
    { title: 'Gobierno', icon: Building2, accent: 'accent-indigo' },
    { title: 'Telecomunicaciones', icon: Network, accent: 'accent-amber' },
    { title: 'Seguros', icon: ShieldCheck, accent: 'accent-blue' },
    { title: 'Energía', icon: Sparkles, accent: 'accent-cyan' },
    { title: 'Construcción', icon: Building2, accent: 'accent-violet' },
    { title: 'Logística', icon: Truck, accent: 'accent-emerald' },
    { title: 'Franquicias', icon: UsersRound, accent: 'accent-indigo' },
    { title: 'Tecnología', icon: Globe2, accent: 'accent-amber' },
  ];

  readonly processSteps: readonly ProcessStep[] = [
    {
      step: '01',
      title: 'Diagnóstico',
      description: 'Analizamos necesidades, riesgos y objetivos de la organización.',
    },
    {
      step: '02',
      title: 'Configuración',
      description: 'Adaptamos modelos, flujos y validaciones conforme a la operación del cliente.',
    },
    {
      step: '03',
      title: 'Implementación',
      description: 'Centralizamos expedientes, procesos y evaluaciones.',
    },
    {
      step: '04',
      title: 'Monitoreo',
      description: 'Generamos dashboards, alertas y seguimiento continuo.',
    },
    {
      step: '05',
      title: 'Inteligencia',
      description: 'Convertimos datos en información accionable para la toma de decisiones.',
    },
  ];

  readonly benefits: readonly SimpleIconItem[] = [
    { title: 'Reducción de riesgos', icon: ShieldCheck, accent: 'accent-blue' },
    { title: 'Mayor trazabilidad', icon: Radar, accent: 'accent-cyan' },
    { title: 'Mejor control documental', icon: FileCheck, accent: 'accent-violet' },
    { title: 'Cumplimiento fortalecido', icon: BadgeCheck, accent: 'accent-emerald' },
    { title: 'Disminución de tiempos operativos', icon: Workflow, accent: 'accent-indigo' },
    { title: 'Mayor visibilidad organizacional', icon: Eye, accent: 'accent-amber' },
    { title: 'Evidencia auditable', icon: LockKeyhole, accent: 'accent-blue' },
    { title: 'Mejor toma de decisiones', icon: BarChart3, accent: 'accent-cyan' },
    { title: 'Estandarización de procesos', icon: ClipboardCheck, accent: 'accent-violet' },
    { title: 'Reducción de fraude y corrupción', icon: Scale, accent: 'accent-emerald' },
  ];

  readonly aboutParagraphs: readonly string[] = [
    'CERTUM360 es una firma especializada en cumplimiento corporativo, evaluación integral y gestión de riesgos empresariales.',
    'Ayudamos a organizaciones a fortalecer sus procesos mediante tecnología, análisis, trazabilidad y modelos inteligentes de evaluación.',
    'Nuestra experiencia integra cumplimiento, riesgo operativo, evaluación de terceros y gestión documental, permitiendo a las empresas operar con mayor seguridad, control y confianza.',
  ];

  readonly philosophyParagraphs: readonly string[] = [
    'Creemos que el cumplimiento no debe verse únicamente como una obligación regulatoria.',
    'Debe convertirse en una herramienta estratégica para fortalecer organizaciones, proteger reputaciones y generar confianza empresarial.',
  ];

  readonly missionVision: readonly IconItem[] = [
    {
      title: 'Misión',
      description: 'Ayudar a las organizaciones a fortalecer su integridad, trazabilidad y capacidad de control mediante tecnología, análisis y modelos inteligentes de evaluación.',
      icon: Target,
      accent: 'accent-blue',
    },
    {
      title: 'Visión',
      description: 'Ser el ecosistema líder en Latinoamérica en cumplimiento, evaluación integral y gestión estratégica de riesgos empresariales.',
      icon: Rocket,
      accent: 'accent-violet',
    },
  ];

  readonly values: readonly IconItem[] = [
    {
      title: 'Integridad',
      description: 'Actuamos con ética, objetividad y transparencia.',
      icon: ShieldCheck,
      accent: 'accent-blue',
    },
    {
      title: 'Confianza',
      description: 'Construimos relaciones basadas en credibilidad y profesionalismo.',
      icon: BadgeCheck,
      accent: 'accent-cyan',
    },
    {
      title: 'Innovación',
      description: 'Desarrollamos soluciones alineadas a los retos actuales del mercado.',
      icon: Sparkles,
      accent: 'accent-violet',
    },
    {
      title: 'Inteligencia',
      description: 'Convertimos datos en decisiones estratégicas.',
      icon: BarChart3,
      accent: 'accent-emerald',
    },
    {
      title: 'Trazabilidad',
      description: 'Garantizamos control y evidencia en cada proceso.',
      icon: Radar,
      accent: 'accent-indigo',
    },
    {
      title: 'Excelencia',
      description: 'Buscamos altos estándares en cada solución.',
      icon: CircleCheck,
      accent: 'accent-amber',
    },
  ];

  readonly useCases: readonly IconItem[] = [
    {
      title: 'Procurement',
      description: 'Evaluación y monitoreo de proveedores.',
      icon: BriefcaseBusiness,
      accent: 'accent-blue',
    },
    {
      title: 'Recursos Humanos',
      description: 'Background checks y expedientes de colaboradores.',
      icon: UsersRound,
      accent: 'accent-cyan',
    },
    {
      title: 'Compliance',
      description: 'Auditorías y control regulatorio.',
      icon: ShieldCheck,
      accent: 'accent-violet',
    },
    {
      title: 'Legal',
      description: 'Control documental y evidencia contractual.',
      icon: Scale,
      accent: 'accent-emerald',
    },
    {
      title: 'Operación',
      description: 'Validación de terceros y monitoreo operativo.',
      icon: Workflow,
      accent: 'accent-amber',
    },
  ];

  readonly faqs: readonly { readonly question: string; readonly answer: string }[] = [
    {
      question: '¿CERTUM360 es una plataforma o una consultoría?',
      answer: 'Somos un ecosistema que combina tecnología, cumplimiento y análisis especializado.',
    },
    {
      question: '¿Se puede adaptar a cualquier industria?',
      answer: 'Sí. Nuestros modelos son configurables conforme al giro y necesidades del cliente.',
    },
    {
      question: '¿Realizan visitas físicas?',
      answer: 'Sí. Contamos con validaciones físicas y operativas como parte de nuestros modelos de evaluación.',
    },
    {
      question: '¿Qué tipo de riesgos ayudan a prevenir?',
      answer: 'Riesgos reputacionales, fiscales, operativos, financieros, regulatorios y de integridad.',
    },
    {
      question: '¿Pueden integrarse con procesos existentes?',
      answer: 'Sí. CERTUM360 puede integrarse con flujos y operaciones actuales de la organización.',
    },
  ];

  readonly footerLinks: readonly AnchorLink[] = [
    ...this.navItems,
    { label: 'Aviso de privacidad', href: '#aviso-privacidad' },
  ];

  readonly privacySections: readonly PrivacySection[] = [
    {
      title: 'Responsable del tratamiento',
      paragraphs: [
        'CERTUM360, con domicilio en Lomas del Anahuac 155, Lomas de Tarango 01620 Álvaro Obregón CDMX, es responsable del tratamiento, uso, almacenamiento y protección de los datos personales que recabe de sus clientes, proveedores, colaboradores, usuarios, candidatos, terceros relacionados y visitantes del sitio web.',
        'Para cualquier asunto relacionado con el presente Aviso de Privacidad, podrá contactarnos a través de correo electrónico: privacidad@centrum360.com.',
        'Sitio web: CERTUM360.',
      ],
      items: [],
    },
    {
      title: 'Datos personales que recabamos',
      paragraphs: [
        'CERTUM360 podrá recabar de manera directa, indirecta o a través de medios electrónicos, físicos o automatizados, los siguientes datos personales:',
      ],
      items: [
        'Datos de identificación: nombre completo, razón social, RFC, CURP, fecha de nacimiento, identificación oficial, firma y nacionalidad.',
        'Datos de contacto: correo electrónico, número telefónico, domicilio y datos de facturación.',
        'Datos laborales y corporativos: puesto, empresa, información laboral, historial profesional y referencias comerciales.',
        'Datos financieros y patrimoniales: información bancaria, historial crediticio, información fiscal, opiniones de cumplimiento e información financiera empresarial.',
        'Datos relacionados con cumplimiento y riesgo: validaciones en listas restrictivas, información reputacional, demandas o litigios públicos, verificaciones documentales, evidencia operativa e información corporativa pública.',
        'Datos tecnológicos: dirección IP, cookies, tipo de navegador, datos de sesión e información de acceso a plataforma.',
      ],
    },
    {
      title: 'Datos personales sensibles',
      paragraphs: [
        'CERTUM360 únicamente recabará datos personales sensibles cuando resulte estrictamente necesario para la prestación de sus servicios y siempre conforme a la legislación aplicable.',
        'En caso de recabar datos sensibles, se solicitará previamente el consentimiento expreso y por escrito de su titular.',
      ],
      items: [],
    },
    {
      title: 'Finalidades del tratamiento',
      paragraphs: [
        'Los datos personales serán utilizados para finalidades necesarias y, adicionalmente, para finalidades secundarias cuando correspondan.',
      ],
      items: [
        'Finalidades necesarias: identificación y validación de usuarios, prestación de servicios contratados, evaluación de proveedores y terceros, integración de expedientes, cumplimiento contractual, verificaciones documentales, evaluaciones de riesgo, validaciones reputacionales, contacto y seguimiento comercial, facturación y cobranza, gestión de accesos a plataforma, atención de solicitudes y cumplimiento de obligaciones legales y regulatorias.',
        'Finalidades secundarias: envío de información comercial, invitaciones a eventos, encuestas de satisfacción, promociones y campañas, estudios estadísticos, y desarrollo de nuevos productos y servicios.',
        'En caso de no desear que sus datos sean utilizados para finalidades secundarias, podrá manifestarlo enviando un correo a privacidad@centrum360.com.',
      ],
    },
    {
      title: 'Transferencia de datos personales',
      paragraphs: [
        'CERTUM360 podrá transferir datos personales sin requerir consentimiento en los casos previstos por la LFPDPPP.',
      ],
      items: [
        'Autoridades competentes.',
        'Cumplimiento de obligaciones legales.',
        'Empresas filiales o subsidiarias.',
        'Proveedores tecnológicos o aliados comerciales necesarios para la prestación del servicio.',
        'Prestadores de servicios de validación y cumplimiento.',
        'En cualquier caso, CERTUM360 implementará medidas razonables para garantizar la protección de los datos personales transferidos.',
      ],
    },
    {
      title: 'Medidas de seguridad',
      paragraphs: [
        'CERTUM360 implementa medidas administrativas, técnicas y físicas razonables para proteger los datos personales contra daño, pérdida, alteración, destrucción, acceso o tratamiento no autorizado.',
      ],
      items: [],
    },
    {
      title: 'Derechos ARCO',
      paragraphs: [
        'Usted tiene derecho a acceder a sus datos personales, rectificarlos, cancelarlos, oponerse a su tratamiento y revocar el consentimiento otorgado para el tratamiento de sus datos personales.',
        'Para ejercer sus derechos ARCO deberá enviar una solicitud al correo: privacidad@centrum360.com.',
      ],
      items: [
        'Nombre del titular.',
        'Documentos que acrediten identidad.',
        'Descripción clara de los datos respecto de los cuales desea ejercer algún derecho.',
        'Medio para comunicar respuesta.',
        'CERTUM360 dará respuesta conforme a los plazos establecidos en la LFPDPPP.',
      ],
    },
    {
      title: 'Cookies y tecnologías de rastreo',
      paragraphs: [
        'Nuestro sitio web podrá utilizar cookies, web beacons y tecnologías similares para mejorar la experiencia del usuario, analizar tráfico y personalizar contenido.',
        'Usted puede modificar la configuración de su navegador para rechazar el uso de cookies.',
      ],
      items: [],
    },
    {
      title: 'Cambios al aviso de privacidad',
      paragraphs: [
        'CERTUM360 podrá modificar o actualizar el presente Aviso de Privacidad en cualquier momento derivado de reformas legales, cambios operativos o nuevas políticas internas.',
        'Las modificaciones estarán disponibles a través del sitio web: CERTUM360.',
      ],
      items: [],
    },
    {
      title: 'Consentimiento y autoridad competente',
      paragraphs: [
        'Al proporcionar sus datos personales y utilizar nuestros servicios, usted reconoce haber leído y comprendido el presente Aviso de Privacidad y consiente el tratamiento de sus datos personales conforme al mismo.',
        'Si considera que su derecho a la protección de datos personales ha sido vulnerado, podrá acudir ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales o visitar: INAI.',
        'Última actualización: Mayo 2026.',
      ],
      items: [],
    },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isScrolled = window.scrollY > 10;
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (window.innerWidth >= 1024) {
      this.isMobileMenuOpen = false;
    }
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedTheme = window.localStorage.getItem('theme') as ThemeMode | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(savedTheme ?? (prefersDark ? 'dark' : 'light'));
    this.onWindowScroll();
  }

  toggleTheme(): void {
    this.setTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  handleAnchorClick(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
    const href = anchor?.getAttribute('href');
    if (!href || href === '#') {
      return;
    }

    const section = document.getElementById(decodeURIComponent(href.slice(1)));
    if (!section) {
      return;
    }

    event.preventDefault();
    this.closeMobileMenu();
    section.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
    window.history.pushState(null, '', href);
  }

  preventContactSubmit(event: Event): void {
    event.preventDefault();
  }

  private setTheme(theme: ThemeMode): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.currentTheme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('theme', theme);
  }
}
