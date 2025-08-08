import JSUtils from "../Helpers.js"

// const HTML_TEMPLATE =
//     `<span 
//         class="c-switch-input" 
//                             >
//             <span class="c-switch-label"> {{label}} </span>
//             <label class="input-switch">
//                 <input type="checkbox" {{checked}} onChange={{handleChange}} >
//                 <span class="slider"></span>
//             </label>
//     </span>
// `

const HTML_TEMPLATE =
    `<span 
        class="{{switchContainerStyle}}"
                            >
            <span class="{{labelStyle}}"> {{label}} </span>
            <label class="{{switchInputStyle}}">
                <input type="checkbox" {{checked}} onChange={{handleChange}} >
                <span class="{{sliderStyle}}"></span>
            </label>
    </span>
`



const defaultSwitchComponentStyles = {
    switchContainerStyle: ["c-switch-input"],
    labelStyle: ["c-switch-label", "flex-row", "wrap", "align-center"],
    switchInputStyle: ["input-switch", "align-self-center"],
    sliderStyle: ["slider"]

}


export function SwitchComponent(
    label,
    checked,
    handleChange,
    customStyles = defaultSwitchComponentStyles
) {


    const mergedStyles = Object.fromEntries(
        Object.entries(defaultSwitchComponentStyles).map(([key, defaultArr]) => {
            const override = customStyles[key] || [];
            return [key, [...defaultArr, ...override]];
        })
    );

    const classNameStrings = Object.fromEntries(
        Object.entries(mergedStyles).map(([key, classList]) => [key, classList.join(" ")])
    );


    return JSUtils.replaceTemplatePlaceholdersAndBindHandlers(HTML_TEMPLATE, {
        label: label,
        checked: checked ? "checked" : "",
        handleChange: handleChange,
        ...classNameStrings
    })
}









