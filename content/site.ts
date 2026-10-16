import type { StaticImageData } from 'next/image';

import editorialSeated from '@/public/images/portraits/editorial-seated.png';
import ccExterior from '@/public/images/community-centre/render-02.png';
import ccCourtyard from '@/public/images/community-centre/render-05.webp';
import ccGallery from '@/public/images/community-centre/render-03.webp';
import ccHall from '@/public/images/community-centre/render-01.webp';
import nhFront from '@/public/images/nature-home/front-view-tree-shade.webp';
import nhCantilever from '@/public/images/nature-home/cantilever-shading.webp';
import nhHallway from '@/public/images/nature-home/entrance-hallway.webp';
import nhSlatRoom from '@/public/images/nature-home/home-gym.webp';
import nh2Garden from '@/public/images/nature-home-2/render-01.webp';
import nh2Bedroom from '@/public/images/nature-home-2/render-04.webp';
import podcast from '@/public/images/portraits/podcast.png';
import studioWorkspace from '@/public/images/portraits/studio-workspace.png';
import studioPortraitTall from '@/public/images/portraits/studio-portrait-tall.webp';
import logoCollection from '@/public/images/brand/logo-collection.webp';

export type Link = { label: string; href: string };
export type Photo = { src: StaticImageData; alt: string };

/* ------------------------------------------------------------------ */
/* Direct enquiries. Placeholder: add Crystal's address here and every enquiry
   button becomes an email with the subject already filled in. Until then they stay inert. */

const contactEmail = '';

function enquiry(subject: string) {
	return contactEmail ? `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}` : '#';
}

/* ------------------------------------------------------------------ */
/* Chapters: the five scales. Drives the scale index and chapter headers. */

export type ChapterId = 'object' | 'building' | 'profession' | 'city' | 'generation';
export type Chapter = { id: ChapterId; number: string; scale: string; brand: string };

export const chapters: Chapter[] = [
	{ id: 'object', number: '01', scale: 'Object', brand: 'ELEvated' },
	{ id: 'building', number: '02', scale: 'Building', brand: 'Studio COKA' },
	{ id: 'profession', number: '03', scale: 'Profession', brand: 'The Effective Architect' },
	{ id: 'city', number: '04', scale: 'City', brand: 'Speaking, research & writing' },
	{ id: 'generation', number: '05', scale: 'Generation', brand: 'AKO Alliance · Alive and Free' },
];

/* ------------------------------------------------------------------ */

export const site = {
	name: 'Crystal Kizor',
	monogram: 'CK',
	contact: { label: 'Get in touch', href: '#start' } satisfies Link,
	/** Shown under the chapters in the mobile menu */
	menuLinks: [
		{ label: 'Where would you like to start?', href: '#start' },
		{ label: 'About Crystal', href: '#about' },
	] satisfies Link[],
	/** Vercel sets VERCEL_PROJECT_PRODUCTION_URL (no protocol); local builds fall back to localhost. */
	url: process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: 'http://localhost:3000',
	seo: {
		title: 'Crystal Kizor · Architect, designing at every scale',
		description:
			'Crystal Kizor is an architect, designer, entrepreneur, speaker, researcher and creator. Studio COKA, ELEvated, The Effective Architect, AKO Alliance and Alive and Free.',
		jobTitle: 'Architect',
	},
};

export const hero = {
	roles: ['Architect', 'Designer', 'Entrepreneur', 'Speaker', 'Researcher'],
	tagline: 'Architect. Designing at every scale.',
	portrait: {
		src: editorialSeated,
		alt: 'Crystal Kizor seated in a timber armchair in a warm studio, wearing a brown coat and cream trousers',
	} satisfies Photo,
	jumpTo: [
		{ label: 'Start a project', href: '#building' },
		{ label: 'Learn with TEA', href: '#profession' },
		{ label: 'Book a talk', href: '#city' },
		{ label: 'Support young people', href: '#generation' },
	] satisfies Link[],
};

export const intro = {
	statement: 'Architects work at every scale, from a chair to a city.',
	emphasis: 'So does Crystal Kizor.',
	body:
		'She is an architect, designer, entrepreneur, speaker, researcher and creator. Her work moves outward from the objects we live with, to the buildings we live in, to the profession that makes them, to the cities they form, and to the young people who will inherit all of it.',
	cta: { label: 'Start small', href: '#object' } satisfies Link,
};

/* ------------------------------------------------------------------ */
/* 01 Object: ELEvated */

export const elevated = {
	name: 'ELEvated',
	description:
		'Contemporary furniture and product design. Functional products rooted in African context, materials and ideas.',
	line: 'The smallest scale: the things you touch every day.',
	// Placeholder: replace with the ELEvated URL
	cta: { label: 'Explore ELEvated', href: '#' } satisfies Link,
};

/* ------------------------------------------------------------------ */
/* 02 Building: Studio COKA */

export type Project = {
	name: string;
	/** Built work is the only completed proof, so it gets the accent label. */
	built: boolean;
	status: string;
	/** row: four equal portraits · feature: one large + two stacked · pair: two side by side */
	layout: 'row' | 'feature' | 'pair';
	photos: Photo[];
};

export const studioCoka = {
	name: 'Studio COKA',
	description:
		'Architecture, interior design and construction studio focused on thoughtful, climate-responsive design.',
	approach: 'Shade, earth, brick and timber, used to make buildings that work with the climate.',
	cta: { label: 'Start a project with Studio COKA', href: enquiry('Project enquiry · Studio COKA') } satisfies Link,
	lead: {
		photo: {
			src: ccExterior,
			alt: 'Render of a circular earth-walled community centre with a broad timber roof, people gathered in the yard',
		} satisfies Photo,
		caption: 'Community Centre · Render',
	},
	projects: [
		{
			name: 'Nature Home',
			built: true,
			status: 'Completed · Built',
			layout: 'row',
			photos: [
				{ src: nhFront, alt: 'Nature Home front drive shaded by a large tree' },
				{ src: nhCantilever, alt: 'Deep cantilevered canopy shading the terrace beside a mature tree' },
				{
					src: nhHallway,
					alt: 'Entrance hallway with a timber slat ceiling and dark fluted wall panels',
				},
				{ src: nhSlatRoom, alt: 'Daylit room lined with vertical timber slats' },
			],
		},
		{
			name: 'Community Centre',
			built: false,
			status: 'Renders',
			layout: 'feature',
			photos: [
				{
					src: ccCourtyard,
					alt: 'Render of a courtyard built around a large tree, ringed by a timber roof with an oval opening',
				},
				{ src: ccGallery, alt: 'Render of a gallery corridor lit through perforated brick screens' },
				{ src: ccHall, alt: 'Render of a round hall with tiered seating under a radial timber roof' },
			],
		},
		{
			name: 'Nature Home 2',
			built: false,
			status: 'Renders',
			layout: 'pair',
			photos: [
				{ src: nh2Garden, alt: 'Render of an earth and brick house opening onto a planted garden' },
				{
					src: nh2Bedroom,
					alt: 'Render of a bedroom with rammed-earth walls and full-height glazing to a garden pool',
				},
			],
		},
	] satisfies Project[],
};

/* ------------------------------------------------------------------ */
/* 03 Profession: The Effective Architect */

export const tea = {
	name: 'The Effective Architect',
	shortName: 'TEA',
	description:
		'Architecture education and media platform helping architects and built-environment professionals learn, grow and build better careers.',
	portrait: {
		src: podcast,
		alt: 'Crystal Kizor at a desk with a podcast microphone, laptop and material samples',
	} satisfies Photo,
	placeholder: 'Latest episode or programme, with title and link.',
	// Placeholder: replace with the TEA URL
	cta: { label: 'Learn with TEA', href: '#' } satisfies Link,
};

/* ------------------------------------------------------------------ */
/* 04 City: Speaking, research & writing */

export const speaking = {
	eyebrow: 'Speaking',
	heading: 'Talks and conversations on architecture, cities and the built environment.',
	topics: [
		'Architecture',
		'Climate-responsive design',
		'African cities',
		'Design',
		'Entrepreneurship',
		'The built environment',
	],
	cta: { label: 'Book Crystal to speak', href: enquiry('Speaking enquiry') } satisfies Link,
	portrait: {
		src: studioWorkspace,
		alt: 'Crystal Kizor in a brown suit, arms folded, in front of a wall of plans and material samples',
	} satisfies Photo,
	research: {
		eyebrow: 'Research & writing',
		// All placeholders until Crystal supplies real pieces
		items: [
			{ kind: 'Writing', title: '[Latest essay title]', href: '#' },
			{ kind: 'Research', title: '[Current research topic]', href: '#' },
			{ kind: 'Media', title: '[Recent feature or interview]', href: '#' },
		],
	},
};

/* ------------------------------------------------------------------ */
/* 05 Generation: AKO Alliance and Alive and Free */

export const generation = {
	headline: 'The largest scale is people:',
	emphasis: 'the ones who will build what comes next.',
	brands: [
		{
			name: 'AKO Alliance',
			description:
				'Expanding access to education and creating opportunities for children and young people.',
			// Placeholder: replace with the AKO Alliance URL
			cta: { label: 'Support AKO Alliance', href: '#' },
		},
		{
			name: 'Alive and Free',
			description:
				'A Christian youth movement helping young people walk in truth, healing, freedom, identity, purpose and life in Christ.',
			// Placeholder: replace with the Alive and Free URL
			cta: { label: 'Join Alive and Free', href: '#' },
		},
	] satisfies { name: string; description: string; cta: Link }[],
};

/* ------------------------------------------------------------------ */
/* Routing: one row per kind of visitor */

export type Route = { visitor: string; destination: string; href: string };

export const routes = {
	heading: 'Where would you like to start?',
	rows: [
		{
			visitor: 'You have a site, a building or an interior in mind',
			destination: 'Studio COKA',
			href: '#building',
		},
		{ visitor: 'You’re looking for furniture or products', destination: 'ELEvated', href: '#object' },
		{
			visitor: 'You’re an architect or built-environment professional',
			destination: 'The Effective Architect',
			href: '#profession',
		},
		{
			visitor: 'You’re planning an event or conversation',
			destination: 'Book Crystal to speak',
			href: '#city',
		},
		{
			visitor: 'You want to widen access to education',
			destination: 'AKO Alliance',
			href: '#generation',
		},
		{
			visitor: 'You’re a young person looking for community and faith',
			destination: 'Alive and Free',
			href: '#generation',
		},
		{
			visitor: 'You’re press, a partner or a collaborator',
			destination: 'Contact Crystal',
			href: enquiry('Press or partnership enquiry'),
		},
	] satisfies Route[],
};

/* ------------------------------------------------------------------ */

export const about = {
	eyebrow: 'About Crystal',
	statement:
		'Architect, designer, entrepreneur, speaker, researcher and creator. One person moving between scales, with architecture as the common thread.',
	bioPlaceholder: 'Short biography: background, training and current focus, supplied by Crystal.',
	recognitionPlaceholder:
		'Selected recognition: awards, publications, features and notable talks, supplied by Crystal.',
	portrait: {
		src: studioPortraitTall,
		alt: 'Crystal Kizor leaning on a stone desk in front of a pin-up wall of drawings and photographs',
	} satisfies Photo,
	/** The signature is cropped out of the logo sheet with CSS until a standalone file exists. */
	signatureSheet: logoCollection,
};

export const footer = {
	byScale: [
		{ label: '01 ELEvated', href: '#object' },
		{ label: '02 Studio COKA', href: '#building' },
		{ label: '03 The Effective Architect', href: '#profession' },
		{ label: '04 Speaking & writing', href: '#city' },
		{ label: '05 AKO Alliance · Alive and Free', href: '#generation' },
	] satisfies Link[],
	// Placeholders: replace with real profile URLs
	social: [
		{ label: 'Instagram', href: '#' },
		{ label: 'LinkedIn', href: '#' },
		{ label: 'YouTube', href: '#' },
	] satisfies Link[],
	email: contactEmail,
	emailPlaceholder: '[Email address placeholder]',
	copyright: '© 2026 Crystal Kizor',
};
