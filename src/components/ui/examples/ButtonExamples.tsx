import { Button } from "../button/Button";

const ButtonExamples = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Get Started</Button>

      <Button variant="accent">Get a Free Consultation</Button>

      <Button variant="secondary">View Services</Button>

      <Button variant="outline">Contact Us</Button>

      <Button variant="link" icon={false}>
        Learn More →
      </Button>

      <Button variant="primary" size="sm">
        Small
      </Button>

      <Button variant="primary" size="lg">
        Large
      </Button>

      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  );
};

export default ButtonExamples;
