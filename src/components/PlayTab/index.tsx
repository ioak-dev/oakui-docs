import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTabNew from '../../oakui/wc/OakTabNew';
import OakTypography from '../../oakui/wc/OakTypography';
import OakContainer from '../../oakui/wc/OakContainer';
import OakCard from '../../oakui/wc/OakCard';

interface Props {
  match: any;
  history: any;
}

const PlayTab = (props: Props) => {
  const [state, setState] = useState({ activeTab: 'tab1' });

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleTabChange = (event: any) => {
    setState({
      activeTab: event.detail.value,
    });
  };

  return (
    <>
      <OakTypography gutterBottom variant="h4">
        Tab component
      </OakTypography>
      <OakCard>
        <OakTabNew
          handleChange={handleTabChange}
          slots={[
            'tab1',
            'tab2',
            'tab3',
            'tab4',
            'tab5',
            'tab6',
            'tab7',
            'tab8',
            'tab9',
            'tab10',
            'tab11',
            'tab12',
          ]}
        >
          {state.activeTab === 'tab1' && (
            <OakContainer paddingHorizontal={2} paddingVertical={5}>
              <OakTypography variant="h3" color="secondary" gutterBottom>
                Dignissimos exercitationem
              </OakTypography>
              Dignissimos exercitationem molestiae numquam ut maiores pariatur
              delectus laborum culpa autem quisquam totam. Architecto
              necessitatibus laborum animi debitis quisquam neque asperiores
              voluptate numquam voluptate quae a. Porro quia non libero itaque
              impedit reiciendis quam corrupti unde repellat est. Autem deserunt
              numquam ea voluptate officia quasi assumenda modi ad quas
              laboriosam occaecati facilis molestiae enim quia hic. Totam ex
              ipsam modi voluptate tempora exercitationem officia quaerat
              officiis sed harum voluptas
            </OakContainer>
          )}
          {state.activeTab === 'tab2' && (
            <OakContainer paddingHorizontal={2} paddingVertical={5}>
              <OakTypography variant="h4" color="danger" gutterBottom>
                Autem soluta assumenda culpa beatae repellendus
              </OakTypography>
              Autem soluta assumenda culpa beatae repellendus veniam asperiores
              magni saepe voluptas quia vitae culpa debitis repellendus deleniti
              veniam. Nobis corporis placeat nobis sunt recusandae odio dolorum
              voluptate quos pariatur nesciunt ea ab perspiciatis suscipit fuga
              in. Aliquam iure eum nihil odio possimus aut iure numquam dolore
              rerum reiciendis ratione voluptatum. Delectus porro reprehenderit
              culpa quod eaque quae quod quas consequuntur. Beatae voluptatum
              distinctio reiciendis mollitia quibusdam facilis repudiandae esse
              quae porro quis nemo. Ex perspiciatis facere et animi delectus
              voluptatibus porro totam at occaecati perferendis voluptas
              corporis nostrum. Eaque nihil itaque ratione laboriosam non
              placeat vitae repellendus fugit ipsum enim quidem officia fugit
            </OakContainer>
          )}
          {state.activeTab === 'tab3' && (
            <OakContainer paddingHorizontal={2} paddingVertical={5}>
              <OakTypography variant="h2" color="success" gutterBottom>
                Ad sapiente provident esse repellat
              </OakTypography>
              Ad sapiente provident esse repellat nostrum sint molestias hic
              eveniet sequi blanditiis et perferendis dolorem incidunt quasi
              sit. Neque nemo corrupti facere sunt ut non nemo quis mollitia ea
              fugit voluptas vero quos veniam similique consequatur. Eveniet rem
              reiciendis voluptatum laborum provident veritatis amet odio in.
              Ullam quo commodi eius beatae incidunt amet quod reiciendis autem
              quis. Voluptates totam nemo adipisci quibusdam perferendis
              consectetur quisquam repellat ducimus ex quidem consectetur fugiat
              natus fugit maiores. Possimus et illum esse voluptas sequi
              recusandae magni itaque nostrum illum amet cumque ipsam aspernatur
              dolorem harum. Esse nam itaque deserunt excepturi minus ipsam
              dignissimos iure facere labore sit. Nam quia ipsam autem ipsam
              sapiente tempora eaque nemo possimus quia consequatur voluptatum.
              Architecto iste omnis impedit nostrum quae consectetur provident
              recusandae necessitatibus eum quo quaerat. Voluptatibus cupiditate
              architecto temporibus quaerat provident corporis minus sapiente
              neque eaque ipsa
            </OakContainer>
          )}
        </OakTabNew>
      </OakCard>
    </>
  );
};

export default PlayTab;
