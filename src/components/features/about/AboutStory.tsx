import { aboutConfig } from "@/packages/configs/about.config";

const AboutStory = () => {
  const { story } = aboutConfig;

  return (
    <section className="border-b border-border/60 py-14 lg:py-20">
      <div className="container-page mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold tracking-wide text-primary">
          {story.eyebrow}
        </span>
        <h2 className="mt-2 text-foreground">{story.title}</h2>

        <div className="mt-5 flex flex-col gap-4">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
