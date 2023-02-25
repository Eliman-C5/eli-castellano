import { Projects } from './../interfaces/app_interfaces';

export type State = Projects[];

type Action = {type: 'ALL' | 'WORK' | 'CHALLENGES' | 'PERSONAL'}

export const filterReducer = (state: State, action: Action): State => {
  
    switch (action.type) {
    
      case 'ALL':
        return state.map(item => ({...item, active: true}))
        
      case 'CHALLENGES':
        return state.map(item => item.category === 'CHALLENGES' ? {...item, active: true} : {...item, active: false})
        
      case 'WORK':
        return state.map(item => item.category === 'WORK' ? {...item, active: true} : {...item, active: false})
        
      case 'PERSONAL':
        return state.map(item => item.category === 'PERSONAL' ? {...item, active: true} : {...item, active: false})
    
      default:
        return state
    }
  
}

