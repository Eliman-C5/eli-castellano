import React from 'react'
import { Projects } from '@/interfaces/app_interfaces';
import { PortfolioCard } from '../PortfolioCard/PortfolioCard';

type Props = {
  filter: Projects[]
}

export const PortfolioProjects = ({filter}: Props) => {

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
        {
          filter.map(item => (item.active &&
            <PortfolioCard key={item.id} item={item} />
          ))
        }
      </div>
  )
}
