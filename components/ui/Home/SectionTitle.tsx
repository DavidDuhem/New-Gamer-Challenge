interface SectionTitleBase {
  title: string;
}

interface SectionTitleWithLink extends SectionTitleBase {
  href: string;
  linkName: string;
}

type SectionTitleProps = SectionTitleBase | SectionTitleWithLink;

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-1">
      <h2 className="text-2xl font-bold text-base-content leading-none">
        {props.title}
      </h2>
      {"href" in props && "linkName" in props && (
        <a
          href={props.href}
          className="text-primary text-lg font-bold relative top-0.5"
        >
          <span className="hidden md:inline"> | </span>
          {props.linkName}
        </a>
      )}
    </div>
  );
}
