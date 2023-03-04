import { Menu, Button , NavLink} from "@mantine/core"
import { SortDescending , SortAscendingLetters , SortAscending2 , SortDescending2} from 'tabler-icons-react';
export function MenuButton(props) {

    return (
        <Menu shadow="md" width={200} withArrow trigger="hover"  >
            <Menu.Target>
                <Button
                 leftIcon={<SortDescending/>}
                  style={{width: "200px"}}
                   variant="gradient" 
                   gradient={{ from: 'teal', to: 'blue', deg: 60 }} >
                    {props.title}</Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Sort</Menu.Label>
                <Menu.Divider />
                <NavLink icon={<SortDescending2 />} label="The biggest increase" onClick={props.onClick1} />
                <NavLink icon={<SortAscending2 />} label="The biggest reduction" onClick={props.onClick2} />
                <NavLink icon={<SortAscendingLetters />} label="Name" onClick={props.onClick3} />

            </Menu.Dropdown>
        </Menu>
    )

}