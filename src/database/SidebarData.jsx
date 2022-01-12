import React from 'react'
import * as GiIcons from 'react-icons/gi'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Ranking',
    path: '/ranking',
    icon: <GiIcons.GiRank3 />
  },
  {
    title: 'Adicionar Tempo',
    path: '/adicionar-tempo',
    icon: <BiIcons.BiTimer />
  },
  {
    title: 'Off-Topics',
    path: '/off-topics',
    icon: <BsIcons.BsFillChatRightDotsFill />
  },
]