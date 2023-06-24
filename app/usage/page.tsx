import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CodeIcon } from "@radix-ui/react-icons";

export default function Home() {
  const faqs = [
    {
      id: 1,
      question: "Why Use Variant Vault?",
      answer:
        "Variant Vault contains ready to use animations & variants for your next project. These are production-ready and can be used in any of your apps.",
    },
    {
      id: 2,
      question: "Why Framer Motion?",
      answer:
        "Framer Motion is one of the most popular animation libraries for React with an average of 2M+ weekly downloads on NPM. It's easy to use and has a great API.",
    },
    {
      id: 3,
      question: "Do I need to pay to use Variant Vault?",
      answer:
        "No!!! It's completely free to use. You can copy and paste the code into your own project.",
    },
    {
      id: 4,
      question: "Can I use Variant Vault in my commercial projects?",
      answer:
        "Yes! You can use Variant Vault in your personal and commercial projects.",
    },
    {
      id: 5,
      question: "Do I need to give credit to Variant Vault?",
      answer:
        "No, you don't need to give credit to Variant Vault. However, if you want to, you can link to Variant Vault on Twitter @abdo_eth.",
    },
    {
      id: 6,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },

    // More questions...
  ];
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight">
          Variant Vault Usage Guide
        </h2>
        <Alert className="mt-4">
          <CodeIcon className="h-4 w-4" />
          <AlertTitle>npm i framer-motion</AlertTitle>
          <AlertDescription>
            Install Framer Motion in your project. This is the only dependency!
          </AlertDescription>
        </Alert>

        <p className="mt-6 max-w-2xl text-base leading-7">
          Variant Vault is completely free to use. It is as simple as copy and
          pasting into your own project. If you have any questions, please reach
          out to me on Twitter @abdo_eth.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
