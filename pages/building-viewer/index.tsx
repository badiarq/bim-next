import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useLanguageContext, useAppContext } from '@/middleware';
import { SideBarLayout } from "@/components/layouts"
import { SideBar } from '@/components/sidebar';
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
      <SideBar />
      
    </SideBarLayout>
  )
};