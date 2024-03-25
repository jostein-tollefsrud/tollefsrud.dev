import {type HTMLAttributes} from 'react';

import {cn} from '@/lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: 'div' | 'header' | 'section' | 'article' | 'aside' | 'footer' | 'ul' | 'main';
	width?: 'text' | 'normal' | 'full';
	spacingTop?: 'small' | 'normal' | 'none' | 'large';
	spacingBottom?: 'small' | 'normal' | 'none' | 'large';
	hasBackground?: boolean;
}

/**
 * @name Container
 * @description
 * * Renders a 3 column grid container.
 * * Children span the middle column.
 * * To make  a direct child like an image span to the edge of the screen,
 * set the className of the child to "!col-span-full".
 *
 * To use this component, the `tailwind.config.js` file must be updated to include the following:
 * ```js
 * {
 *   theme: {
 *     extend: {
 *       gridTemplateColumns: {
 *         'container-text': 'minmax(24px, 1fr) minmax(auto, 768px) minmax(24px, 1fr)',
 *         'container-normal': 'minmax(24px, 1fr) minmax(auto, 1280px) minmax(24px, 1fr)',
 *         'container-full': 'minmax(24px, 1fr) minmax(auto, 100%) minmax(24px, 1fr)',
 *       },
 *     },
 *   },
 * }
 * ```
 */
export const Container = (props: Props) => {
	const {
		as,
		children,
		width = 'normal',
		className,
		spacingBottom,
		spacingTop,
		hasBackground,
		...rest
	} = props;

	const Component = as ?? 'div';

	let spacingBottomString = '';
	let spacingTopString = '';

	switch (spacingBottom) {
		case 'none':
			spacingBottomString = hasBackground ? 'pb-0' : 'mb-0';
			break;
		case 'small':
			spacingBottomString = hasBackground ? 'pb-4' : 'mb-4';
			break;
		case 'normal':
			spacingBottomString = hasBackground ? 'pb-12' : 'mb-12';
			break;
		case 'large':
			spacingBottomString = hasBackground ? 'pb-24' : 'mb-24';
			break;
	}

	switch (spacingTop) {
		case 'none':
			spacingTopString = hasBackground ? 'pt-0' : 'mt-0';
			break;
		case 'small':
			spacingTopString = hasBackground ? 'pt-4' : 'mt-4';
			break;
		case 'normal':
			spacingTopString = hasBackground ? 'pt-12' : 'mt-12';
			break;
		case 'large':
			spacingTopString = hasBackground ? 'pt-24' : 'mt-24';
			break;
	}

	let gridTemplateColumns = '';

	switch (width) {
		case 'text':
			gridTemplateColumns = 'grid-cols-container-text';
			break;
		case 'normal':
			gridTemplateColumns = 'grid-cols-container-normal';
			break;
		case 'full':
			gridTemplateColumns = 'grid-cols-container-full';
			break;
		default:
			gridTemplateColumns = 'grid-cols-container-normal';
	}

	return (
		<Component
			className={cn([
				'relative',
				'grid',
				'items-center',
				gridTemplateColumns,
				'[&>*]:col-start-2',
				'[&>*]:col-end-2',
				spacingBottomString,
				spacingTopString,
				className,
			])}
			{...rest}
		>
			{children}
		</Component>
	);
};

Container.displayName = 'Container';
