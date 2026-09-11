import { Button } from "@/components/ui/button/Button";
import { LinkExamples } from "@/components/ui/link/LinkExamples";

const DevPage = () => {
  return (
    <>
      <LinkExamples />
      <div>
        <Button variant="primary">Get Started →</Button>

        <Button variant="secondary">View Services</Button>

        <Button variant="outline">Contact Us</Button>

        <Button variant="link">Learn More →</Button>
      </div>
    </>
  );
};

export default DevPage;
