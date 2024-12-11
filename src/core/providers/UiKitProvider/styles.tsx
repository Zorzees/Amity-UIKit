import styled, { keyframes } from 'styled-components';

const loaderFrames = keyframes`
  from {
	-webkit-transform: rotate(0deg);
	transform: rotate(0deg);
  }

  to {
	-webkit-transform: rotate(360deg);
	transform: rotate(360deg);
  }
`;

import skeletonCss from 'react-loading-skeleton/dist/skeleton.css?inline';

export const UIStyles = styled.div`
  color-scheme: only light;
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.palette.base.main};
  width: 100%;
  height: 100%;
  overflow: hidden;
  input,
  div {
    box-sizing: border-box;
  }

  // CSS resets to avoid inheriting from other other libraries e.g. antd.
  & * {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    line-height: 1.5;
  }

  & pre {
    ${({ theme }) => theme.typography.body}
  }

  @keyframes react-loading-skeleton {
    100% {
      transform: translateX(100%);
    }
  }

  .react-loading-skeleton {
    --base-color: #ebebeb;
    --highlight-color: #f5f5f5;
    --animation-duration: 1.5s;
    --animation-direction: normal;
    --pseudo-element-display: block; /* Enable animation */

    background-color: var(--base-color);

    width: 100%;
    border-radius: 0.25rem;
    display: inline-flex;
    line-height: 1;

    position: relative;
    user-select: none;
    overflow: hidden;
  }

  .react-loading-skeleton::after {
    content: ' ';
    display: var(--pseudo-element-display);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      90deg,
      var(--base-color),
      var(--highlight-color),
      var(--base-color)
    );
    transform: translateX(-100%);

    animation-name: react-loading-skeleton;
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  @media (prefers-reduced-motion) {
    .react-loading-skeleton {
      --pseudo-element-display: none; /* Disable animation */
    }
  }
`;

export const LoaderBtn = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  font-size: 1em;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;

  &::before,
  &::after {
    content: '';
    width: 4rem;
    height: 4rem;
    margin: 0 0 0 -2rem;
  }

  &::before {
    position: absolute;
    top: 0;
    content: '';
    left: 50%;
    border-radius: 500rem;
    border: 0.2em solid rgba(0, 0, 0, 0.1);
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    animation: ${loaderFrames} 0.6s linear;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #767676 transparent transparent;
    border-style: solid;
    border-width: 0.2em;
    box-shadow: 0 0 0 1px transparent;
  }
`;
