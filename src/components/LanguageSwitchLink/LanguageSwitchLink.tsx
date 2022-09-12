import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';

const replaceParams = (pathName: string, params: Record<string, string>) => {
	let result = pathName;

	for (const [key, value] of Object.entries(params)) {
		result = result.replace(`[${key}]`, value);
	}

	return result;
};

interface LanguageSwitchLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	locale: string;
}

export const LanguageSwitchLink: FC<PropsWithChildren<LanguageSwitchLinkProps>> = ({
	children,
	locale,
	...props
}) => {
	const { pathname, query } = useRouter();
	const href = replaceParams(pathname, { ...(query as Record<string, string>), locale });

	return (
		<Link href={href}>
			<a hrefLang={locale} {...props}>
				{children}
			</a>
		</Link>
	);
};
