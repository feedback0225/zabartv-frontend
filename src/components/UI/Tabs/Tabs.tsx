import classNames from "classnames";
import {FC, Fragment, ReactNode} from "react"
import {Tab, TabList, TabPanel, Tabs as ReactTabs} from "react-tabs"

type TabItem = {
    txt: string;
    condition?: unknown;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    className?: string;
}

export const Tabs: FC<TabsProps> = ({className, tabs}) => {
    return (
        <ReactTabs className={classNames('react-tabs', className)}>
            <TabList>
                {tabs.map((el) => {

                    const {txt, condition = true} = el

                    return (
                        <Fragment key={txt}>
                            {condition ? <Tab>{txt}</Tab> : null}
                        </Fragment>
                    )
                })}
            </TabList>
            {tabs.map((el) => {

                const {txt, content, condition = true} = el;

                return (
                    <Fragment key={txt}>
                        {condition ? (
                            <TabPanel>{content}</TabPanel>
                        ) : null}
                    </Fragment>
                )
            })}
      </ReactTabs>
    );
}