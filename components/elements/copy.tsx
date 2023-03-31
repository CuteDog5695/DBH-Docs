import type { FunctionComponent } from "react";
import { CopyButton, createStyles, Text, Tooltip } from "@mantine/core";

export interface CopyProps {
  value: string;
}

/**
 * Next.js image component with additional styling (radius & width/height: 100%)
 * @param {StaticImageData} props.src - Image source provided from an import
 * @param {string} props.alt - Required alt text for accessibility
 * @returns {JSX.Element} - Next.js image component
 * @see {@link https://nextjs.org/docs/api-reference/next/image Next.js Image Component}
 * @example
 * <Image src={accountCreation} alt="How to create an account" />
 **/
export const Copy: FunctionComponent<CopyProps> = ({ value, ...props }) => {
  const { classes } = createStyles((theme) => ({
    selection: {
      cursor: "pointer",
      borderBottom: "2px solid " + theme.fn.rgba(theme.black, .5),
      transition: "border-bottom .3s",

      ":hover": {
        transition: "border-bottom .3s",
        borderBottom: "2px solid " + theme.black,
      }
    },
  }))();

  return (
    <CopyButton value={value}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? "Copied" : "Copy"} withArrow>
          <Text span {...props} onClick={copy} className={classes.selection}>
            {value}
          </Text>
        </Tooltip>
      )}
    </CopyButton>
  );
};
