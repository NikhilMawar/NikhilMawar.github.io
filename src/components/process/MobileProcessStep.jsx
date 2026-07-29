import {
    Search,
    Crosshair,
    Lightbulb,
    Scan,
    Rocket,
} from "lucide-react";

import { themeColors } from "../../utils/theme";

const icons = {
    Discover: Search,
    Define: Crosshair,
    Dive: Lightbulb,
    Design: Scan,
    Deliver: Rocket,
};

export default function MobileProcessStep({
    step,
    theme = "light",
    isLast = false,
}) {
    const colors = themeColors[theme];

    const Icon = icons[step.title];

    return (
        <div>

            <div className="flex gap-5">

                {/* Icon */}

                <div
                    className="
                        flex
                        h-[40px]
                        w-[40px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[12px]
                        border-[1.5px]
                    "
                    style={{
                        borderColor: colors.heading,
                        color: colors.heading,
                    }}
                >
                    <Icon
                        size={18}
                        strokeWidth={2}
                    />
                </div>

                {/* Content */}

                <div className="min-w-0 flex-1">

                    {/* Number */}

                    <p
                        className="
                            text-[12px]
                            font-medium
                            leading-none
                        "
                        style={{
                            color: colors.subtext,
                        }}
                    >
                        {step.number}
                    </p>

                    {/* Title */}

                    <h3
                        className="
                            mt-1
                            font-['Syne']
                            text-[16px]
                            font-bold
                            leading-none
                            tracking-[-0.04em]
                        "
                        style={{
                            color: "#7D607D",
                        }}
                    >
                        {step.title}
                    </h3>

                    {/* Description */}

                    <p
                        className="
                            mt-2
                            text-[12px]
                            leading-[1.35]
                        "
                        style={{
                            color: colors.subtext,
                        }}
                    >
                        {step.description}
                    </p>

                </div>

            </div>

            {!isLast && (
                <div
                    className="mt-3 mb-3 h-px w-full"
                    style={{
                        backgroundColor: colors.tertiary,
                    }}
                />
            )}

        </div>
    );
}