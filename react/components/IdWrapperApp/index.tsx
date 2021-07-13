import React, { ReactNode } from 'react';
import { useCssHandles } from 'vtex.css-handles';

interface Props {
  wrapperId: string,
  children: ReactNode
}

const IdWrapperApp = ({ children, wrapperId }: Props) => {
  const CSS_HANDLES = ["wrapper23"];

  const handles = useCssHandles(CSS_HANDLES);

  return <>
    <div id={wrapperId} className={handles.wrapper23}>
      {children}
    </div>
  </>
}

export default IdWrapperApp;