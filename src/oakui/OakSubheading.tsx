import React, { useState, useEffect } from 'react';
import './styles/oak-subheading-emailflow.scss';
import OakHeadingLink from './OakHeadingLink';

interface Props {
  title: any;
  subtitle?: string;
  links?: {
    label: string;
    icon?: string;
    action: any;
  }[];
  linkSize?: 'large';
  children?: any;
}

const OakSubheading = (props: Props) => {
  return (
    <div className="oak-subheading">
      <div className="oak-subheading--heading-title">{props.title}</div>
      {props.subtitle && (
        <div className="oak-subheading--heading-subtitle">{props.subtitle}</div>
      )}
      <div className="heading-links">
        {props.links?.map((item, index) => (
          <OakHeadingLink
            link={item}
            key={item.label || index}
            size={props.linkSize}
          />
        ))}
      </div>
      {props.children && (
        <div className="heading-children">{props.children}</div>
      )}
      <div className="heading-highlight" />
    </div>
  );
};

export default OakSubheading;
