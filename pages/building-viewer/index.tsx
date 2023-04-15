import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useLanguageContext, useAppContext } from '@/middleware';
import { SideBarLayout } from "@/components/layouts"
import { TestElement } from '@/components/test-element';
import { Dictionary } from '@/interfaces'

export default function BuildingViewer() {

  const t:Dictionary = useLanguageContext()[1];
  const state = useAppContext()[0];
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && !state.user) {
      router.push('/login');
    }
  }, [router, state.user]);

  return (
    <SideBarLayout
    title={`${t.appName} - ${t.buildingViewer}`}
    description={`${t.openBIMPlatform} - ${t.buildingViewer} - ${t.visualize3DModels}`}
    keywords={`BIM, ${t.BIMPlatform}, ${t.insert3DModel}, BIM GIS`}
    > 
      <TestElement />
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facilis. Dolorem libero quisquam fuga tempora voluptas quasi possimus aspernatur quae laboriosam vitae! Repellendus ipsum, consequuntur voluptatum deserunt a quos quia dolorum omnis eum temporibus? Possimus nam perspiciatis ad distinctio temporibus commodi aperiam molestiae, quia sapiente facilis neque. Unde, voluptates in ratione error ducimus quaerat optio adipisci et quasi est odit vero porro labore dolorum possimus illum earum perspiciatis deserunt. Architecto eveniet necessitatibus suscipit cum ullam ratione fugit reprehenderit. Eius eligendi deleniti atque fugiat at culpa autem praesentium! Provident at, in veniam aliquam officia sapiente veritatis ipsa porro. Atque molestiae voluptatum id quos minima. Quibusdam aut quos dolore ducimus quo error velit ea. Consequatur hic esse et quidem pariatur ratione sit. Voluptas iste error id fuga quod similique quos voluptate nihil reprehenderit perferendis assumenda nam dignissimos accusantium ex ad, omnis aliquam? Enim, recusandae provident ab saepe esse distinctio ipsum temporibus, fugit molestiae ea explicabo, doloremque amet blanditiis! Dignissimos aspernatur alias quaerat reiciendis quam recusandae non ipsam aperiam quod voluptates reprehenderit et unde magnam at, suscipit magni deserunt dicta nesciunt. Tempore praesentium temporibus non quod voluptatibus consectetur saepe odio possimus obcaecati. Reiciendis, provident corrupti eligendi officia veritatis in iure repudiandae sit totam. Ad est dolore delectus nemo molestiae minus quis commodi esse voluptates laborum adipisci officia placeat a, iure sint. Neque, maiores nemo vel pariatur ea distinctio suscipit unde eaque tempore ut, iste sunt alias incidunt in, beatae officia non quia qui dolores est eos? Quod nihil architecto saepe dolor quam sapiente quos optio amet deleniti ex tenetur vel autem dolores perspiciatis eum dignissimos, suscipit consequatur! Voluptas ipsam accusamus minus explicabo fugit, modi eligendi. Quisquam quia hic aliquid similique? Est quidem, eum iste unde dolores voluptatem, culpa incidunt alias aliquid tempore voluptas ut magnam odit voluptate cum, in minus architecto id expedita rem quos quibusdam? In veniam sit possimus omnis vel, error nulla minus animi itaque totam quibusdam accusamus quisquam harum, maxime officia placeat fugiat porro quo ratione eius similique beatae repudiandae est? Facere officia vitae repellat ad! Corrupti quo, itaque necessitatibus ratione aliquid veritatis accusantium delectus, eligendi excepturi quam facere doloribus incidunt placeat sunt fuga in vel eius porro ipsam, nesciunt vero sit. Voluptates nam illum repellat quam eaque laudantium aspernatur saepe impedit fugiat dolor repudiandae eligendi reiciendis laboriosam beatae itaque dolorum, suscipit dolore ut molestiae libero veniam quibusdam unde nemo. Nisi ipsum, voluptates temporibus dignissimos et molestias id? Natus voluptatum aliquam, asperiores exercitationem dicta assumenda deserunt maiores laboriosam, pariatur doloremque minima vitae unde blanditiis laborum, impedit atque esse error accusantium. Eligendi expedita voluptatum repellendus ea vitae nisi id at laudantium iusto, distinctio nemo unde modi nam sed aut eveniet nobis recusandae consectetur omnis rerum nihil mollitia accusantium. Facere eaque rerum perferendis odio, laborum, maiores labore quaerat libero dicta dolore illo laudantium nihil deleniti fuga sapiente vitae incidunt, quae doloribus quo. Vero vel ipsa molestias neque delectus aliquid minima nihil. Blanditiis distinctio porro velit possimus suscipit ullam quod nemo praesentium delectus, quasi officia natus omnis perspiciatis deleniti, quidem enim assumenda. Molestiae.</p> */}
    </SideBarLayout>
  )
};