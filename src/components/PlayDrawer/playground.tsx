import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { MenuOpen } from '@material-ui/icons';
import './style.scss';
import OakDrawer from '../../oakui/wc/OakDrawer';
import OakButton from '../../oakui/wc/OakButton';
import OakSection from '../../oakui/wc/OakSection';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSelect from '../../oakui/wc/OakSelect';
import OakRadioGroup from '../../oakui/wc/OakRadioGroup';
import OakRadio from '../../oakui/wc/OakRadio';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [state, setState] = useState<any>({
    position: 'left',
  });

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 220);
  }, [state.position]);

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  return (
    <div>
      <OakSection gutterBottom>
        <OakRadioGroup
          radioGroupName="position"
          name="position"
          label="position"
          value={state.position}
          handleChange={handleChange}
        >
          <OakRadio name="left" radioGroupName="position">
            left
          </OakRadio>
          <OakRadio name="right" radioGroupName="position">
            right
          </OakRadio>
        </OakRadioGroup>
      </OakSection>
      <OakDrawer isOpen={isOpen} position={state.position}>
        <div slot="drawer">
          <div className="drawer-side">
            <OakSection fillColor="primary">
              <div className="drawer-side__content">
                Deserunt odit id repellat ea porro possimus inventore ad
                consectetur impedit excepturi cumque. Distinctio quam suscipit
                omnis in vel possimus alias natus consequatur cupiditate
                pariatur inventore nemo atque qui laboriosam quaerat. Itaque
                enim inventore omnis libero ad optio nam in eius ratione
                praesentium eius. Laudantium quam adipisci cumque quis quas quos
                earum dolore esse dolore alias fugiat voluptate. Aliquid
                cupiditate nemo reprehenderit culpa explicabo consequuntur vero
                ipsum temporibus voluptate nostrum temporibus. Ex dignissimos
                magni nobis officiis omnis cum placeat nobis ratione delectus a
              </div>
            </OakSection>
          </div>
        </div>
        <div slot="content">
          <div className="content-side">
            <OakSection>
              <div className="content-side__top">
                <OakButton
                  theme="primary"
                  variant="appear"
                  shape="icon"
                  handleClick={() => setIsOpen(!isOpen)}
                >
                  <MenuOpen />
                </OakButton>
              </div>
              <div className="content-side__bottom">
                <OakTypography variant="h5">
                  Debitis tempora commodi saepe distinctio
                </OakTypography>
                Debitis tempora commodi saepe distinctio perspiciatis quasi sit
                optio accusamus ratione necessitatibus dicta qui error fugit.
                Odit necessitatibus perferendis officia neque blanditiis odio
                quas velit inventore numquam. Magnam ex dolorum vero asperiores
                illum repudiandae omnis perspiciatis eos. Omnis rerum quo
                corrupti eius sequi delectus consectetur tempora culpa. Aut
                tempore eius repellat alias architecto reiciendis rerum totam
                magni corrupti. Temporibus repudiandae neque velit facere
                temporibus et quidem recusandae inventore rerum ratione quasi
                quod assumenda. Magnam aspernatur ipsum aliquid reprehenderit
                facere veritatis id doloribus quo placeat maiores sit. Quas
                pariatur occaecati consequatur tempora ad accusamus aut itaque
                exercitationem repudiandae maxime sit laboriosam consequuntur
                fugit. Error perspiciatis ipsa quam est exercitationem saepe
                molestiae dolor dolorum maxime quod sed placeat. Maiores amet id
                quas sit cupiditate laboriosam amet est eveniet error officia
                dolores architecto. Necessitatibus enim sit illo molestiae
                adipisci molestias sit laboriosam animi pariatur qui aspernatur
                voluptates alias facere. Eveniet culpa tempore reiciendis fugit
                laborum soluta voluptatum explicabo sunt nulla alias facere
                pariatur
              </div>
            </OakSection>
          </div>
        </div>
      </OakDrawer>
    </div>
  );
};

export default Playground;
