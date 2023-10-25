import {Checkbox, CheckboxProps} from "@mui/material";
import UncheckedIcon from "./UncheckIcon.tsx";
import CheckIcon from "./CheckIcon.tsx";

const DemoCheckbox = (props: Omit<CheckboxProps, 'icon' | 'checkedIcon'>) => {
    return (
        <Checkbox {...props}
                  icon={<UncheckedIcon/>}
                  checkedIcon={<CheckIcon/>}/>
    )
}

export default DemoCheckbox;