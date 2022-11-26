import { lazy, Suspense, LazyExoticComponent, ComponentType } from "react";
import styles from "./styles.module.scss";

interface IconProps {
	name: string;
	className: string;
}

interface IconCollectionProps {
	[name: string]: LazyExoticComponent<ComponentType<any>>;
}

const iconCollection: IconCollectionProps = {
	Delete: lazy(() => import(`@mui/icons-material/Delete`)),
	Edit: lazy(() => import(`@mui/icons-material/Edit`)),
	Save: lazy(() => import(`@mui/icons-material/LibraryAddCheckRounded`)),
	Restore: lazy(
		() => import(`@mui/icons-material/SettingsBackupRestoreRounded`),
	),
};

export const DynamicIcon = ({ name, className }: IconProps) => {
	const { plug } = styles;
	const Icon = iconCollection[name];

	return (
		<Suspense fallback={<div className={plug} />}>
			<Icon className={className} />
		</Suspense>
	);
};
