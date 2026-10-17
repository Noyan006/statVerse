import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math, block = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
        output: 'htmlAndMathml',
      });
    } catch (err) {
      console.warn('KaTeX rendering error for:', math, err);
      return `<code class="text-rose-500">${math}</code>`;
    }
  }, [math, block]);

  if (block) {
    return (
      <div
        className={`my-3 p-3 overflow-x-auto text-center rounded-lg bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`inline-block px-1 font-serif text-slate-900 dark:text-slate-100 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

/**
 * Helper component that parses markdown-style text containing inline `$formula$` and block `$$formula$$`.
 */
export const FormattedContent: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const parts = useMemo(() => {
    // Split by block math $$...$$ first, then inline $...$
    const tokens: Array<{ type: 'text' | 'inline-math' | 'block-math'; content: string }> = [];
    const blockRegex = /\$\$([\s\S]*?)\$\$/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = blockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        tokens.push({ type: 'text', content: text.substring(lastIndex, match.index) });
      }
      tokens.push({ type: 'block-math', content: match[1] });
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      tokens.push({ type: 'text', content: text.substring(lastIndex) });
    }

    // Now process inline math in text tokens
    const finalTokens: Array<{ type: 'text' | 'inline-math' | 'block-math'; content: string }> = [];
    const inlineRegex = /\$([^$\n]+?)\$/g;

    for (const token of tokens) {
      if (token.type === 'block-math') {
        finalTokens.push(token);
        continue;
      }

      let subLastIndex = 0;
      let subMatch: RegExpExecArray | null;
      while ((subMatch = inlineRegex.exec(token.content)) !== null) {
        if (subMatch.index > subLastIndex) {
          finalTokens.push({ type: 'text', content: token.content.substring(subLastIndex, subMatch.index) });
        }
        finalTokens.push({ type: 'inline-math', content: subMatch[1] });
        subLastIndex = subMatch.index + subMatch[0].length;
      }
      if (subLastIndex < token.content.length) {
        finalTokens.push({ type: 'text', content: token.content.substring(subLastIndex) });
      }
    }

    return finalTokens;
  }, [text]);

  return (
    <div className={`leading-relaxed space-y-2 ${className}`}>
      {parts.map((p, idx) => {
        if (p.type === 'block-math') {
          return <MathView key={idx} math={p.content} block />;
        }
        if (p.type === 'inline-math') {
          return <MathView key={idx} math={p.content} />;
        }
        return <span key={idx}>{p.content}</span>;
      })}
    </div>
  );
};
