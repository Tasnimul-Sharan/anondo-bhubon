function SourceText({ block, as: Tag = "p", className = "" }) {
  return (
    <Tag data-source-text={block.index} className={`whitespace-pre-line ${className}`}>
      {block.runs
        ? block.runs.map((run, index) => {
            let text = run.text;
            if (run.italic) text = <em>{text}</em>;
            return run.bold
              ? <strong key={index} className="font-semibold">{text}</strong>
              : <span key={index}>{text}</span>;
          })
        : block.text}
    </Tag>
  );
}

function DocumentBlocks({ blocks }) {
  const groups = [];
  for (const block of blocks) {
    if (block.kind === "list-item") {
      if (groups.at(-1)?.kind === "list") groups.at(-1).blocks.push(block);
      else groups.push({ kind: "list", blocks: [block] });
    } else groups.push({ kind: "block", block });
  }

  return (
    <div className="space-y-5 text-base leading-8 text-primary/90">
      {groups.map((group) => {
        if (group.kind === "list") {
          return (
            <ul key={group.blocks[0].index} className="space-y-3 border-l-2 border-secondary/50 pl-5 sm:pl-7">
              {group.blocks.map((block) => (
                <SourceText key={block.index} block={block} as="li" />
              ))}
            </ul>
          );
        }
        const { block } = group;
        if (block.kind === "subheading") {
          return (
            <SourceText
              key={block.index}
              block={block}
              as="h4"
              className="border-t border-border_color pt-7 text-xl font-semibold leading-snug tracking-normal text-primary"
            />
          );
        }
        return (
          <SourceText
            key={block.index}
            block={block}
            className={block.kind === "allocation"
              ? "border-l-2 border-secondary pl-4 text-lg font-semibold leading-8 text-primary"
              : ""}
          />
        );
      })}
    </div>
  );
}

function SectionHeading({ block }) {
  const numbered = block.text.match(/^(\d+\.)(\s+)(.*)$/);
  if (!numbered) {
    return (
      <SourceText
        block={block}
        as="h3"
        className="border-l-2 border-secondary pl-5 text-2xl font-semibold leading-snug tracking-normal text-primary sm:text-3xl"
      />
    );
  }
  return (
    <h3
      data-source-text={block.index}
      className="flex items-start text-2xl font-semibold leading-snug tracking-normal text-primary sm:text-3xl"
    >
      <span className="mr-5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded border border-secondary/60 text-base tabular-nums">
        {numbered[1]}
      </span>
      {numbered[2]}
      <span className="min-w-0 pt-1">{numbered[3]}</span>
    </h3>
  );
}

export default function MasterplanDocumentSection({ documentContent }) {
  const { introduction, sections, closing } = documentContent;

  return (
    <article data-source-document={documentContent.sourceFile} className="bg-white text-primary">
      <header className="bg-off_white px-6 py-14 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold text-primary/75">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-secondary" />
            Design Preview
          </p>
          <div className="space-y-5">
            {introduction.map((block) => (
              <SourceText
                key={block.index}
                block={block}
                as={block.kind === "title" ? "h2" : "p"}
                className={block.kind === "title"
                  ? "text-3xl font-semibold leading-tight tracking-normal text-primary sm:text-4xl"
                  : block.text === "ANONDO BHUBON" || block.text.startsWith("CHAPTER ")
                    ? "text-sm font-semibold text-primary/80"
                    : "text-lg leading-8 text-primary/85"}
              />
            ))}
          </div>
        </div>
      </header>

      {sections.map((section) => (
        <section
          key={section.heading.index}
          className={`border-t border-border_color px-6 py-12 sm:py-14 lg:px-12 ${section.notes ? "bg-off_white" : "bg-white"}`}
        >
          <div className="mx-auto max-w-4xl">
            {section.notes && (
              <p className="mb-5 text-xs font-semibold text-primary/70">Document Notes</p>
            )}
            <SectionHeading block={section.heading} />
            <div className="mt-8">
              {section.layout === "metrics" ? (
                <>
                  <div className="grid gap-7 border-y border-border_color py-8 sm:grid-cols-3">
                    {[0, 2, 4].map((index) => (
                      <div key={index}>
                        <SourceText block={section.blocks[index]} className="text-4xl font-semibold leading-tight" />
                        <SourceText block={section.blocks[index + 1]} className="mt-3 text-sm leading-7 text-primary/85" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <DocumentBlocks blocks={section.blocks.slice(6)} />
                  </div>
                </>
              ) : <DocumentBlocks blocks={section.blocks} />}
            </div>
          </div>
        </section>
      ))}

      {closing.length > 0 && (
        <footer className="bg-primary px-6 py-12 text-white sm:py-14 lg:px-12">
          <div className="mx-auto max-w-4xl space-y-4">
            <span aria-hidden="true" className="mb-6 block h-0.5 w-12 bg-secondary" />
            {closing.map((block, index) => (
              <SourceText
                key={block.index}
                block={block}
                className={index === 1 ? "text-2xl font-semibold leading-snug sm:text-3xl" : "text-base leading-8 text-white/90"}
              />
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}
