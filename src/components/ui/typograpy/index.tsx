import React, { PropsWithChildren } from 'react';
import S from './page.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { LinkIcon } from 'lucide-react';

export const Head1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h1 ref={ref} className={classNames({[S.head1]: true, [className ?? '']: true})} {...props} />
  )
});
Head1.displayName = "Head1";

export const Head2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h2 ref={ref} className={classNames({[S.head2]: true, [className ?? '']: true})} {...props} />
  )
});
Head2.displayName = "Head2";

export const Head3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h3 ref={ref} className={classNames({[S.head3]: true, [className ?? '']: true})} {...props} />
  )
});
Head3.displayName = "Head3";

export const Head4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h4 ref={ref} className={classNames({[S.head4]: true, [className ?? '']: true})} {...props} />
  )
});
Head4.displayName = "Head4";

export const Head5 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h5 ref={ref} className={classNames({[S.head5]: true, [className ?? '']: true})} {...props} />
  )
});
Head5.displayName = "Head5";

export const Head6 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h6 ref={ref} className={classNames({[S.head6]: true, [className ?? '']: true})} {...props} />
  )
});
Head6.displayName = "Head6";

export const Info = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span ref={ref} className={classNames({[S.Info]: true, [className ?? '']: true})} {...props} />
  )
});
Info.displayName = "Info";

export const InfoMin = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span ref={ref} className={classNames({[S.info_min]: true, [className ?? '']: true})} {...props} />
  )
});
InfoMin.displayName = "InfoMin";

export const Text = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p ref={ref} className={classNames({[S.text]: true, [className ?? '']: true})} {...props} />
  )
});
Text.displayName = "Text";

export const TextBlur = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p ref={ref} className={classNames({[S.text_blur]: true, [className ?? '']: true})} {...props} />
  )
});
TextBlur.displayName = "TextBlur";

export const TextLink = React.forwardRef<
  HTMLAnchorElement,
  React.HTMLAttributes<HTMLAnchorElement> & { href: string }
>(({ className, href = "", title, ...props }, ref) => {
  return (
    <Link ref={ref} className={S.textLink} href={href} target="_blank" {...props}>
      <p className={classNames({[S.text]: true, [className ?? '']: true})} style={{ color: "inherit" }}>{title}</p>
    </Link>
  )
});
TextLink.displayName = "TextLink";

export const IconLink = React.forwardRef<
  HTMLAnchorElement,
  React.HTMLAttributes<HTMLAnchorElement> & { href: string }
>(({ className, href = "", ...props }, ref) => {
  return (
    <Link ref={ref} className={classNames({[S.iconLink]: true, [className ?? '']: true})} href={href} target="_blank" {...props}>
      <LinkIcon width={12} height={12} style={{ color: "inherit" }} />
    </Link>
  )
});
IconLink.displayName = "IconLink";