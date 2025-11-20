import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb"

interface BreadcrumbItemData {
    label: string;
    to: string;
}

interface Props {
    currentPage: string;
    breadcrumbs?: BreadcrumbItemData[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>

                {/* Home */}
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                {/* Separador si hay breadcrumbs */}
                {breadcrumbs.length > 0 && <BreadcrumbSeparator />}

                {/* Breadcrumbs intermedios */}
                {breadcrumbs.map((crumb, index) => (
                    <BreadcrumbItem key={index}>
                        <BreadcrumbLink href={crumb.to}>{crumb.label}</BreadcrumbLink>
                    </BreadcrumbItem>
                ))}

                {/* Separador antes de la página actual */}
                <BreadcrumbSeparator />

                {/* Página actual */}
                <BreadcrumbItem>
                    <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>

            </BreadcrumbList>
        </Breadcrumb>
    );
};

