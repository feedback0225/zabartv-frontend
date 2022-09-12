import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

interface NextLinkProps extends LinkProps {
	skipLocaleHandling?: boolean;
}

export const NextLink: FC<PropsWithChildren<NextLinkProps>> = ({
	children,
	skipLocaleHandling,
	...rest
}) => {
	const router = useRouter();
	const locale = (rest.locale || router.query.locale || '') as string;
	let linkHref = rest.href || router.asPath;
	if (linkHref.toString().indexOf('http') === 0) {
		skipLocaleHandling = true;
	}
	if (locale && !skipLocaleHandling) {
		linkHref = linkHref ? `/${locale}${linkHref}` : router.pathname.replace('[locale]', locale);
	}

	const { href, ...props } = { ...rest };

	return (
		<Link href={linkHref} {...props}>
			{children}
		</Link>
	);
};
