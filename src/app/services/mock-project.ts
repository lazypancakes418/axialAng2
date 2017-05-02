import { Project } from './project'

export let PROJECTS: Project[] = [
  {
    headline: 'Funding Strategic Growth in the Restaurant Sector',
    target_check_size_min: 2000000,
    target_check_size_max: 10000000,
    target_revenue_min: 0,
    target_revenue_max: 50000000,
    target_ebitda_min: -2000000,
    target_ebitda_max: 10000000
  },
  {
    headline: 'Funding Strategic Growth in the Mobile Sector',
    target_check_size_min: 2000000,
    target_check_size_max: 10000000,
    target_revenue_min: 0,
    target_revenue_max: 50000000,
    target_ebitda_min: -2000000,
    target_ebitda_max: 10000000
  },
  {
    headline: 'Funding Strategic Growth in the Desktop Sector',
    target_check_size_min: 2000000,
    target_check_size_max: 10000000,
    target_revenue_min: 0,
    target_revenue_max: 50000000,
    target_ebitda_min: -2000000,
    target_ebitda_max: 10000000
  },
  {
    headline: 'One Awesome Project',
    target_check_size_min: 2000000,
    target_check_size_max: 10000000,
    target_revenue_min: 0,
    target_revenue_max: 50000000,
    target_ebitda_min: -2000000,
    target_ebitda_max: 10000000
  },
  {
    headline: 'Alot of Awesome Projects',
    target_check_size_min: 2000000,
    target_check_size_max: 10000000,
    target_revenue_min: 0,
    target_revenue_max: 50000000,
    target_ebitda_min: -2000000,
    target_ebitda_max: 10000000
  },
  {
    headline: 'Funding Strategic Growth in the Restaurant Sector',
    target_check_size_min: 2000000,
    target_check_size_max: 10000000,
    target_revenue_min: 0,
    target_revenue_max: 50000000,
    target_ebitda_min: -2000000,
    target_ebitda_max: 10000000
  },
  {
    headline: 'Funding Strategic Growth in the Restaurant Sector',
    target_check_size_min: 2000000,
    target_check_size_max: 10000000,
    target_revenue_min: 0,
    target_revenue_max: 50000000,
    target_ebitda_min: -2000000,
    target_ebitda_max: 10000000
  },
  {
    headline: 'Something',
    target_check_size_min: 2000000,
    target_check_size_max: 10000000,
    target_revenue_min: 0,
    target_revenue_max: 50000000,
    target_ebitda_min: -2000000,
    target_ebitda_max: 10000000
  },
];


export const DELETE =  (index: number): void  => {
  let data: Project[] = [...PROJECTS];
  data = [...data.slice(0, index), ...data.slice(index + 1)];
  PROJECTS = data;
  return PROJECTS
}

export const ADD = (proj: Project): void => {
  let data: Project[] = [...PROJECTS];
  data = [proj, ...data];
  PROJECTS = data;
  return PROJECTS
}

export const EDIT = (index: number, proj: Project): void => {
  let data: Project[] = [...PROJECTS];
  data = [...data.slice(0, index), proj, ...data.slice(index + 1)];
  PROJECTS = data;
  return PROJECTS
}