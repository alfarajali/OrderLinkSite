import { ArrowLeft, BarChart3, BellRing, Check, ChevronDown, MapPin, PackageCheck, Play, ShieldCheck, Smartphone, Users } from 'lucide-react';

const features = [
  [PackageCheck, 'كل الطلبات في مكان واحد', 'أنشئ الطلب، حدّث حالته، وراجع تفاصيله من شاشة واضحة وسريعة.'],
  [MapPin, 'توصيل منظّم', 'احفظ عناوين العملاء وحدد مواقع الاستلام والتسليم بكل سهولة.'],
  [Users, 'عملاؤك أقرب', 'احتفظ ببيانات العملاء وسجل طلباتهم لتخدمهم بصورة أفضل.'],
  [BellRing, 'تنبيهات في وقتها', 'ابقَ على اطلاع بحالة الطلبات ومواعيد التوصيل المهمة.'],
  [BarChart3, 'أرقام تساعدك', 'تابع المبيعات وأداء الطلبات لتتخذ قرارات أوضح.'],
  [ShieldCheck, 'بياناتك محمية', 'تجربة مصممة بعناية مع احترام خصوصية بياناتك وبيانات عملائك.'],
] as const;

const policy = [
  ['البيانات التي نجمعها', 'قد نجمع بيانات الحساب مثل الاسم ورقم الجوال والبريد الإلكتروني، والعناوين ومعلومات الموقع التي تختار حفظها، وبيانات العملاء والطلبات ومواعيد التوصيل، بالإضافة إلى رمز الجهاز اللازم لإرسال الإشعارات.'],
  ['كيفية استخدام البيانات', 'نستخدم البيانات لتسجيل الدخول وإدارة حسابك، وإنشاء الطلبات ومتابعتها، وتحديد مواقع الاستلام والتوصيل، وإرسال التنبيهات المتعلقة بالطلبات، وتقديم الدعم، وتحسين أداء التطبيق وأمانه.'],
  ['الموقع الجغرافي', 'يُستخدم الموقع عند منح الإذن أو اختيار موقع على الخريطة لحفظ العناوين وتنفيذ خدمات التوصيل. يمكنك التحكم في إذن الموقع من إعدادات جهازك، وقد تتأثر بعض الميزات عند إيقافه.'],
  ['الإشعارات', 'قد نرسل إشعارات عن حالة الطلب أو اقتراب موعد التوصيل. يتطلب ذلك حفظ رمز إشعارات خاص بجهازك، ويمكنك إيقاف الإشعارات من إعدادات الجهاز.'],
  ['مشاركة البيانات', 'لا نبيع بياناتك الشخصية. قد نشارك القدر اللازم منها مع مقدمي خدمات التقنية والإشعارات، أو مندوبي التوصيل المرتبطين بالطلب، أو الجهات المختصة عندما يقتضي النظام ذلك.'],
  ['حفظ البيانات وحمايتها', 'نحتفظ بالبيانات للمدة اللازمة لتقديم الخدمة والوفاء بالمتطلبات النظامية. نطبق تدابير تقنية وتنظيمية مناسبة لحمايتها، مع العلم أنه لا توجد وسيلة تخزين أو نقل إلكتروني آمنة بصورة مطلقة.'],
  ['حقوقك', 'يمكنك مراجعة بيانات حسابك وتصحيحها وإدارة عناوينك، كما يمكنك طلب المساعدة بشأن الوصول إلى بياناتك أو تحديثها أو حذفها، وفق الأنظمة المعمول بها في المملكة العربية السعودية والالتزامات النظامية التي تنطبق علينا.'],
  ['التغييرات على السياسة', 'قد نحدّث هذه السياسة عند تطوير الخدمات أو تغير المتطلبات النظامية. سيظهر تاريخ آخر تحديث في هذه الصفحة، ويُعد استمرار استخدام التطبيق بعد التحديث قبولًا للسياسة المعدّلة.'],
  ['التواصل معنا', 'إذا كان لديك سؤال أو طلب يتعلق بالخصوصية، يمكنك التواصل معنا من خلال قسم المساعدة والدعم داخل التطبيق.'],
];

export default function Home() {
  return <main>
    <header><a className="brand" href="#top"><img src="/orderlink-icon.svg" alt=""/><b>OrderLink</b></a><nav><a href="#features">المزايا</a><a href="#pricing">الاشتراك</a><a href="#privacy">الخصوصية</a></nav><a className="outline" href="#pricing">ابدأ الآن</a></header>

    <section className="hero" id="top">
      <div><p className="kicker">إدارة الطلبات ببساطة</p><h1>اربط طلباتك.<br/><em>حرّك أعمالك.</em></h1><p className="lead">تطبيق <strong>OrderLink</strong> مصمم لأصحاب المتاجر الصغيرة والأعمال المنزلية، مثل الأسر المنتجة، ليساعدهم على <strong>تنظيم الطلبات وإدارة العملاء ومتابعة التوصيل</strong> بسهولة من مكان واحد، <strong>دون رفع تكاليف التشغيل أو إضافة تعقيدات وخصائص لا يحتاجون إليها</strong>، ليتمكنوا من إدارة أعمالهم بكفاءة وبساطة ووضوح.</p><div className="actions"><a className="button dark" href="#pricing">اكتشف الباقات <ArrowLeft/></a><a href="#features">تعرّف على المزايا ↓</a></div><div className="trust"><span>✓ سهل الاستخدام</span><span>✓ مصمم للأعمال المحلية</span></div></div>
      <div className="visual"><div className="rings"/><div className="phone"><img className="app-screenshot" src="/orderlink-dashboard.jpg" alt="واجهة تطبيق OrderLink لإدارة الطلبات والعملاء والمبيعات"/></div></div>
    </section>

    <section className="features" id="features"><div className="section-title"><div><p className="kicker">لماذا OrderLink؟</p><h2>كل ما تحتاجه لإدارة طلباتك بثقة</h2></div><p>أدوات عملية صُممت لتخفف العمل اليدوي وتمنحك رؤية أوضح ليومك.</p></div><div className="feature-grid">{features.map(([Icon,title,text])=><article key={title}><span><Icon/></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="pricing" id="pricing"><div><p className="kicker">اشتراك واضح</p><h2>ابدأ مجاناً،<br/><em>وتوسّع عندما تحتاج.</em></h2><p>تظهر خيارات الدفع والأسعار الحالية داخل تطبيق OrderLink، لتختار مدة الاشتراك والحد الشهري المناسب لعملك.</p><div className="safe"><ShieldCheck/><span><b>دفع آمن</b><small>إتمام الدفع عبر صفحة دفع محمية</small></span></div></div><article className="plan"><div className="planhead"><span><small>عضوية OrderLink</small><h3>الخطة المناسبة لعملك</h3></span><Smartphone/></div><p>ابدأ بالخطة المجانية ثم اختر من داخل التطبيق الباقة ومدة الاشتراك الأنسب لك.</p><ul>{['إدارة الطلبات والعملاء','متابعة التوصيل والعناوين','إشعارات حالة الطلب','تقارير المبيعات والأداء','باقات بحدود شهرية مرنة'].map(x=><li key={x}><Check/>{x}</li>)}</ul><div className="coming-soon"><strong>تطبيق OrderLink قادم قريباً!</strong><span>نعمل على إطلاقه لتتمكن من إدارة طلباتك بكل بساطة.</span></div><div className="store-buttons"><div className="store-button" aria-label="قريباً على App Store"><svg className="apple-mark" viewBox="0 0 384 512" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-72.5-19.7-30.5.5-58.2 13.3-81.6 33.6-62.7 54.6-53.3 142.9-11.3 210.5 20.9 33.7 46 71.6 78.8 70.3 31.2-1.2 43-20.5 80.6-20.5 36.5 0 47.1 20.5 80 19.7 34-.5 55.5-30.4 76.2-64.2 24-39.2 33.9-77.2 34.6-79.2-.8-.3-65.7-24.8-65.9-99.6zM262.4 102.5c16.9-20.4 28.3-48.9 25.2-77.5-24.3 1-53.8 16.2-70.9 36.6-15.3 17.7-28.7 46.7-25.1 74.7 27.1 2.1 54.9-13.8 70.8-33.8z"/></svg><span><small>قريباً على</small><b>App Store</b></span></div><div className="store-button" aria-label="قريباً على Google Play"><Play/><span><small>قريباً على</small><b>Google Play</b></span></div></div><small className="note">ترقّبنا — سنعلن عن روابط التحميل فور إطلاق التطبيق.</small></article></section>

    <section className="privacy" id="privacy"><div className="privacy-title"><span><ShieldCheck/></span><div><p className="kicker">خصوصيتك تهمنا</p><h2>سياسة الخصوصية</h2><small>آخر تحديث: 17 أغسطس 2026</small></div></div><p className="privacy-lead">توضح هذه السياسة كيف يجمع تطبيق OrderLink بياناتك ويستخدمها ويحميها عند استخدام خدمات إدارة الطلبات والتوصيل.</p><div className="policy">{policy.map(([title,text],i)=><details key={title} open={i===0}><summary><i>{String(i+1).padStart(2,'0')}</i>{title}<ChevronDown/></summary><p>{text}</p></details>)}</div></section>

    <footer id="contact"><div className="brand"><img src="/orderlink-icon.svg" alt=""/><span><b>OrderLink</b><small>طلباتك، مرتبطة.</small></span></div><p>حل أبسط لإدارة الطلبات والتوصيل.</p><div><a href="#features">المزايا</a><a href="#pricing">الاشتراك</a><a href="#privacy">الخصوصية</a></div><small>© 2026 OrderLink. جميع الحقوق محفوظة.</small></footer>
  </main>;
}
