import { Ref, SVGProps, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    fill={"none"}
    height={"81"}
    ref={ref}
    viewBox={"0 0 94 81"}
    width={"94"}
    xmlns={"http://www.w3.org/2000/svg"}
    {...props}
  >
    <g filter={"url(#filter0_bdf_0_14)"}>
      <circle
        cx={"44"}
        cy={"28"}
        fill={"url(#paint0_radial_0_14)"}
        fillOpacity={"0.8"}
        r={"30"}
        shapeRendering={"crispEdges"}
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters={"sRGB"}
        filterUnits={"userSpaceOnUse"}
        height={"94"}
        id={"filter0_bdf_0_14"}
        width={"94"}
        x={"0"}
        y={"-13"}
      >
        <feFlood floodOpacity={"0"} result={"BackgroundImageFix"} />
        <feGaussianBlur in={"BackgroundImageFix"} stdDeviation={"2"} />
        <feComposite
          in2={"SourceAlpha"}
          operator={"in"}
          result={"effect1_backgroundBlur_0_14"}
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
          result={"effect2_dropShadow_0_14"}
        />
        <feOffset dx={"3"} dy={"6"} />
        <feGaussianBlur stdDeviation={"13.5"} />
        <feComposite in2={"hardAlpha"} operator={"out"} />
        <feColorMatrix
          type={"matrix"}
          values={
            "0 0 0 0 0.694118 0 0 0 0 0.462745 0 0 0 0 0.85098 0 0 0 0.25 0"
          }
        />
        <feBlend
          in2={"effect1_backgroundBlur_0_14"}
          mode={"normal"}
          result={"effect2_dropShadow_0_14"}
        />
        <feBlend
          in={"SourceGraphic"}
          in2={"effect2_dropShadow_0_14"}
          mode={"normal"}
          result={"shape"}
        />
        <feGaussianBlur
          result={"effect3_foregroundBlur_0_14"}
          stdDeviation={"5"}
        />
      </filter>
      <radialGradient
        cx={"0"}
        cy={"0"}
        gradientTransform={
          "translate(30.35 13.9) rotate(51.0412) scale(49.3828)"
        }
        gradientUnits={"userSpaceOnUse"}
        id={"paint0_radial_0_14"}
        r={"1"}
      >
        <stop stopColor={"#ECD0FF"} stopOpacity={"0.8"} />
        <stop offset={"0.596678"} stopColor={"#A15DCF"} stopOpacity={"0.3"} />
        <stop offset={"0.785899"} stopColor={"#7631A4"} stopOpacity={"0.26"} />
        <stop offset={"1"} stopColor={"#561880"} stopOpacity={"0.29"} />
      </radialGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
