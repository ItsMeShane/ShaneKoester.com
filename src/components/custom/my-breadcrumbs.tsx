import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export type MyBreadcrumbProps = {
  breadcrumbs?: {
    label: string
    to?: string
  }[];
};

const MyBreadcrumbs = ({ breadcrumbs }: MyBreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs?.map((bc, index) => {
          return (
            <React.Fragment key={index}>
              <BreadcrumbSeparator></BreadcrumbSeparator>
              <BreadcrumbItem>
                {bc.to ? (
                  <BreadcrumbLink to={bc.to}>
                    {bc.label}
                  </BreadcrumbLink>
                ) : (
                  <span>{bc.label}</span>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default MyBreadcrumbs;
