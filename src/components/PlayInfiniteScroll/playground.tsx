import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSection from '../../oakui/wc/OakSection';
import OakSelect from '../../oakui/wc/OakSelect';
import OakButton from '../../oakui/wc/OakButton';
import OakInput from '../../oakui/wc/OakInput';
import OakSheet from '../../oakui/wc/OakSheet';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakDivider from '../../oakui/wc/OakDivider';
import OakCheckbox from '../../oakui/wc/OakCheckbox';
import OakInfiniteScroll from '../../oakui/wc/OakInfiniteScroll';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<any>({
    color: 'global',
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleScrollChange = (detail: any) => {
    console.log(detail);
  };

  return (
    <div className="tab-playground">
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="none" outlineColor="none" rounded fullWidth>
          <OakSelect
            label="Color"
            value={state.color}
            options={[
              'none',
              'global',
              'container',
              'surface',
              'float',
              'primary',
              'secondary',
              'tertiary',
              'default',
              'info',
              'danger',
              'warning',
              'success',
              'invert',
            ]}
            name="color"
            handleChange={handleChange}
            gutterBottom
          />
        </OakSection>
      </OakSheet>
      <OakSection
        fillColor={state.matchBackground ? state.color : 'none'}
        paddingHorizontal={2}
        paddingVertical={2}
        rounded
      >
        <div className="scroll-content">
          <OakInfiniteScroll
            handleChange={handleScrollChange}
            variant="body-selector"
            customSelector=".scroll-content__container"
          >
            <div className="scroll-content__container">
              A nihil repellendus recusandae amet molestias quibusdam dicta
              sapiente voluptatibus similique odit quae voluptates laboriosam.
              Amet nisi expedita repellendus voluptate a neque optio porro
              reiciendis dolor ex inventore ad alias. Provident ea error
              voluptatibus voluptatibus nesciunt officiis quam voluptatibus
              voluptate fuga numquam doloremque autem. Corporis numquam earum
              itaque doloribus nihil quam hic exercitationem ullam quae minus
              commodi. Impedit voluptas alias occaecati ducimus earum blanditiis
              nesciunt similique ab est fugiat reprehenderit. Quia porro facere
              consequuntur provident vitae quam maxime labore dolorum
              dignissimos labore. Deleniti doloremque incidunt dicta nulla ipsam
              unde facere mollitia consectetur vitae quod delectus provident
              Quas fugit non inventore odit amet molestiae atque unde porro
              magnam quam deserunt odio pariatur ipsum officia. Incidunt debitis
              voluptatum nesciunt veritatis dolorem laudantium itaque
              dignissimos officia hic. Voluptatibus incidunt eaque nobis magni
              accusantium enim dolorem maxime porro laborum velit reiciendis ea
              illo occaecati qui. Quibusdam itaque explicabo sed temporibus
              necessitatibus minima molestias praesentium veniam ipsa laudantium
              fugiat necessitatibus at repellendus. Voluptatem placeat voluptas
              consequatur maiores neque corrupti est ipsam totam nisi corporis.
              Illum quaerat iste ex ad reprehenderit tempore deleniti explicabo
              tenetur qui illum. Veniam aperiam omnis earum autem molestiae
              magni reiciendis sed dolorem architecto quibusdam aspernatur
              asperiores omnis Tempore blanditiis incidunt nam laudantium nemo
              dicta explicabo aperiam rem repudiandae dignissimos amet maxime.
              Consectetur iusto commodi natus incidunt tempore nam magni atque
              repellat eos dolorem occaecati hic illo unde inventore adipisci.
              Ducimus aliquam aliquam non distinctio est quia ipsum voluptates
              quasi. Eum numquam earum eaque quo vero porro recusandae nostrum
              suscipit repellendus aut veniam ratione ut fuga maxime aspernatur.
              Expedita eveniet adipisci nobis veritatis nobis perspiciatis
              provident quaerat quidem accusantium esse autem ratione magni
              nulla animi Corporis reprehenderit officiis nam cum omnis libero
              officia modi neque. Ab provident repellendus quaerat illum
              inventore molestias laboriosam illo necessitatibus iure at quis
              veritatis libero minima. Libero corporis quidem exercitationem
              animi perspiciatis voluptatibus explicabo reprehenderit deleniti.
              Ea debitis iure placeat inventore mollitia molestiae blanditiis
              consequatur omnis doloribus ullam provident impedit quam. Incidunt
              commodi totam molestias debitis nulla veritatis cumque iure
              accusamus rerum impedit nisi doloremque accusamus rem. Consectetur
              cum harum porro fugit debitis rem molestias cumque expedita Ullam
              repellendus placeat corporis doloremque officiis quisquam ut quae
              nisi voluptate iure necessitatibus non cum. Sit illo architecto
              molestias sequi autem harum debitis earum quos dolores aspernatur
              dolor odio hic quod. Id sit fuga pariatur recusandae assumenda
              veritatis iusto nemo suscipit quia. Velit nobis quisquam ab
              similique expedita incidunt dolores quisquam consectetur
              doloremque illo ipsam dignissimos voluptatem error
              dignissimosDeserunt beatae soluta id voluptatum veniam facilis
              tenetur exercitationem quos aliquam et accusantium quia porro
              maiores. Inventore voluptatem repudiandae optio magnam ipsum ipsam
              praesentium ipsum repudiandae facilis reprehenderit optio incidunt
              architecto. Natus consequuntur molestias inventore eveniet vero
              necessitatibus laboriosam impedit pariatur magni repellendus
              placeat. Nemo quaerat deserunt dignissimos consequatur totam
              expedita quasi quisquam et consequatur quaerat quam sit nobis
              atque nesciunt harum. Et ipsum dolorem corrupti nesciunt ex
              mollitia maxime vero amet labore. Voluptatibus architecto
              laudantium nesciunt alias expedita aliquam quo inventore
              exercitationem et voluptatem qui labore nemo eius non aliquam.
              Sapiente est impedit vero minima assumenda facilis in iure
              deleniti atque aspernatur maxime Dignissimos impedit aliquid
              aperiam rem a saepe quas ab sequi nostrum impedit autem
              praesentium. Esse maxime architecto fugiat aliquid sapiente dolor
              inventore est ex ipsam quibusdam accusantium reiciendis. Nisi
              similique atque labore perferendis ea occaecati officiis natus
              voluptas consectetur nihil asperiores laborum. Amet facere aut
              inventore inventore provident provident doloremque recusandae
              quaerat. Voluptatibus unde quasi dignissimos provident fugiat
              ratione minus quos quidem ducimus. Excepturi voluptatibus
              excepturi veritatis consequatur voluptatem nisi illo suscipit
              repudiandae labore quis deleniti fugiat nam eligendi molestias
              libero Dolores sint molestiae molestias porro accusamus iusto
              quaerat reprehenderit non veniam dolor laboriosam quia assumenda.
              Maiores enim ducimus aperiam iusto distinctio maiores dolores ex
              soluta at a beatae natus consequatur sapiente labore. Libero a
              eaque nam reprehenderit provident reprehenderit culpa
              reprehenderit ducimus officia ipsam cumque magnam alias voluptate.
              Doloremque explicabo laboriosam amet asperiores ratione odit eaque
              sed sunt aperiam. Magnam excepturi sint in sunt debitis
              accusantium eos aliquam quidem corrupti eaque aut laborum illo
              deserunt voluptatum sequi Perspiciatis quod porro illo repellat
              ipsa aliquid ullam atque harum cupiditate placeat velit blanditiis
              tenetur. Expedita reiciendis sed explicabo libero quia vitae odit
              magnam dolorum. Quo laborum dolor consequuntur consequatur ratione
              perspiciatis a accusantium molestiae mollitia earum impedit
              exercitationem totam illum consequuntur nostrum. Expedita ea rerum
              error similique sint est distinctio veniam unde similique
              necessitatibus ducimus amet consectetur quod Reprehenderit optio
              amet natus maiores incidunt sit ut aperiam quaerat iure
              repudiandae. Optio labore unde nulla ipsam quaerat iusto ab
              corrupti animi laboriosam eveniet illum quia rem magni sapiente.
              Ea at facere numquam illo iste reiciendis deserunt ipsa vitae
              eaque minus reprehenderit doloribus corrupti cumque sequi. Veniam
              nam vero dignissimos autem ipsa impedit nisi dignissimos
              dignissimos doloremque error doloremque in et repudiandae eos.
              Autem ex suscipit odio eaque earum eius autem saepe distinctio.
              Sapiente debitis inventore modi illum reiciendis quae blanditiis
              officiis numquam a vitae unde Iure commodi pariatur possimus
              dolores nulla reiciendis voluptatum occaecati similique tempore
              quae rem earum ea ut dolor. Neque illum consectetur quas soluta
              doloribus natus maiores quo mollitia assumenda omnis id
              exercitationem dignissimos eos. Distinctio doloremque explicabo
              commodi nam laboriosam aspernatur maxime hic laboriosam eum rem.
              Voluptatem corrupti inventore cumque cupiditate dignissimos maxime
              at beatae at est expedita. Doloribus facere illo mollitia
              excepturi nulla temporibus veniam nulla similique ullam aut odio
              error perferendis. Quam soluta nesciunt magnam consequuntur
              necessitatibus neque eaque itaque a itaque libero quaerat sit.
              Totam beatae iusto sed exercitationem omnis inventore amet
              asperiores architecto nulla ea odio ex vel eius assumenda Ab
              sapiente minus nobis unde veritatis iusto alias earum alias neque
              voluptatem numquam doloremque. Iusto alias temporibus repudiandae
              temporibus expedita consequatur harum quod corrupti vero fuga.
              Voluptatibus aliquam eaque quibusdam dolor a laudantium molestias
              esse sit saepe aliquam at sequi. Minima possimus quisquam
              quibusdam neque eum aliquam vero voluptas vero totam accusamus aut
              Ex neque quasi molestias recusandae dolorem harum quia
              necessitatibus aut. Corporis quis ipsam quibusdam aut atque odit
              ipsa quidem reiciendis fugiat repellendus molestiae nulla. Officia
              corrupti maiores doloremque nesciunt occaecati ducimus iure ut
              suscipit accusamus error. Amet aliquam consequatur blanditiis iure
              magni soluta mollitia eos reprehenderit quis magni id adipisci
              rerum iure. Maiores ducimus atque at dignissimos laborum officia
              illo fugit animi suscipit eius quisquam non natus illum quas. Ab
              quae laboriosam iusto repudiandae repellat vitae nostrum
              voluptatem aspernatur pariatur delectus tempora delectus possimus
              explicabo corporis quibusdam Labore asperiores numquam cum illum
              quod laudantium labore iure est a architecto adipisci in laborum.
              Nesciunt modi hic nobis molestiae voluptatum dicta nesciunt
              dignissimos vitae optio ullam commodi. Nesciunt similique quam
              dolore consectetur vitae iusto modi voluptate est adipisci
              asperiores magnam est accusamus laboriosam aspernatur. Totam
              sapiente commodi quia labore mollitia molestias placeat quasi
              eveniet harum assumenda cupiditate pariatur harum porro. Ad alias
              iste occaecati vel laudantium repudiandae ea tempora vel
              exercitationem velit quod dolorum fugiat delectus voluptatibus
              Harum neque quo unde quibusdam voluptas vero officiis quisquam ab
              perferendis consectetur in eos asperiores repellendus veritatis.
              Dolor deleniti sapiente adipisci tempore accusamus sint ipsum eos
              quisquam totam ipsum doloribus qui nostrum iusto harum. Occaecati
              voluptatem exercitationem doloribus architecto suscipit quos
              placeat cumque sapiente voluptatibus. Maiores possimus aperiam
              similique optio occaecati minima dignissimos sed impedit magni
              occaecati nostrum unde quidem. Eveniet dolores quis aliquam
              incidunt error iste eum unde nulla voluptas in hic aliquam iusto
              iste nihil. Quo nam ab labore velit officiis earum praesentium
              fugit amet
            </div>
          </OakInfiniteScroll>
        </div>
      </OakSection>
      <br />
      <OakFormActionsContainer align="left">
        <OakButton
          theme="info"
          variant="appear"
          handleClick={() => setIsOpen(true)}
          size="xsmall"
        >
          Component settings
        </OakButton>
      </OakFormActionsContainer>
    </div>
  );
};

export default Playground;
