import React from 'react'
import { Projects } from '@/interfaces/app_interfaces';
import { PortfolioCard } from '../PortfolioCard/PortfolioCard';

type Props = {
  portfolio: Projects[]
}

export const PortfolioProjects = ({portfolio}: Props) => {

  return (
    <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mt-8">
        {
          portfolio.map(item => (
            <PortfolioCard key={item.id} item={item} />
          ))
        }
      </div>
  )
}
