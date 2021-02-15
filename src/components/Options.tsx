import * as React from "react";
import { OptionData } from "~model"
import { Option } from "~/components"

export const Options = (options: OptionData[]) => (
    <div>
        <em>Options</em>
        {
            Object.values(options).map((optionData) => <Option key={optionData.shortName} {...optionData} />)
        }
    </div>
)