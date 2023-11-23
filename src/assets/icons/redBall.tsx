import { Ref, SVGProps, forwardRef, memo } from "react";
const ChevronUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={"none"}
    height={"117"}
    ref={ref}
    viewBox={"0 0 117 117"}
    width={"117"}
    xmlns={"http://www.w3.org/2000/svg"}
    {...props}
  >
    <g filter={"url(#filter0_bd_0_13)"}>
      <circle
        cx={"55.5"}
        cy={"52.5"}
        fill={"url(#paint0_radial_0_13)"}
        fillOpacity={"0.8"}
        r={"41.5"}
        shapeRendering={"crispEdges"}
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters={"sRGB"}
        filterUnits={"userSpaceOnUse"}
        height={"117"}
        id={"filter0_bd_0_13"}
        width={"117"}
        x={"0"}
        y={"0"}
      >
        <feFlood floodOpacity={"0"} result={"BackgroundImageFix"} />
        <feGaussianBlur in={"BackgroundImageFix"} stdDeviation={"2"} />
        <feComposite
          in2={"SourceAlpha"}
          operator={"in"}
          result={"effect1_backgroundBlur_0_13"}
        />
        <feColorMatrix
          in={"SourceAlpha"}
          result={"hardAlpha"}
          type={"matrix"}
          values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
        />
        <feMorphology
          in={"SourceAlpha"}
          operator={"erode"}
          radius={"10"}
          result={"effect2_dropShadow_0_13"}
        />
        <feOffset dx={"3"} dy={"6"} />
        <feGaussianBlur stdDeviation={"13.5"} />
        <feComposite in2={"hardAlpha"} operator={"out"} />
        <feColorMatrix
          type={"matrix"}
          values={
            "0 0 0 0 0.87451 0 0 0 0 0.490196 0 0 0 0 0.490196 0 0 0 0.25 0"
          }
        />
        <feBlend
          in2={"effect1_backgroundBlur_0_13"}
          mode={"normal"}
          result={"effect2_dropShadow_0_13"}
        />
        <feBlend
          in={"SourceGraphic"}
          in2={"effect2_dropShadow_0_13"}
          mode={"normal"}
          result={"shape"}
        />
      </filter>
      <radialGradient
        cx={"0"}
        cy={"0"}
        gradientTransform={
          "translate(36.6175 32.995) rotate(51.0412) scale(68.3129)"
        }
        gradientUnits={"userSpaceOnUse"}
        id={"paint0_radial_0_13"}
        r={"1"}
      >
        <stop stopColor={"#FFD0D0"} stopOpacity={"0.67"} />
        <stop offset={"0.596678"} stopColor={"#D45D5D"} stopOpacity={"0.33"} />
        <stop offset={"0.785899"} stopColor={"#A73131"} stopOpacity={"0.31"} />
        <stop offset={"1"} stopColor={"#821919"} stopOpacity={"0.31"} />
      </radialGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(ChevronUp);
const Memo = memo(ForwardRef);

export default Memo;
