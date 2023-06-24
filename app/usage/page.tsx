import AllVariants from "@/components/usage/all-variants";
import CallToAction from "@/components/usage/call-to-action";
import Copy from "@/components/usage/copy";

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

    // More questions...
  ];
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight">
          Variant Vault Usage Guide
        </h2>

        <div className="mb-12">
          <p className="mt-4 text-lg">
            Using Variant Vault is easy. All you need to do is install Framer
            Motion and copy and paste the code into your project.
          </p>
          <div className="not-prose my-6 rounded-2xl bg-primary-foreground">
            <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-2 rounded-t-lg border bg-primary-foreground px-4">
              <h3 className="mr-auto pt-3 text-xs font-semibold ">
                Step 1: Install Framer Motion
              </h3>
            </div>
            <div className="group border-l border-r border-b rounded-b-lg">
              <div className="relative">
                <pre className="overflow-x-auto p-4 text-xs">
                  <code className="language-bash">
                    <span>
                      <span>yarn add framer-motion</span>
                    </span>
                  </code>
                </pre>

                <Copy />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-lg">
          Here are all the variant definitions in case you want to make a
          constants file.
        </p>
        <AllVariants />

        <CallToAction />

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
