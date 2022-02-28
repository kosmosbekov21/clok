import React from 'react'
import logol from '../image/chart_9.png'
import iclo from '../image/pose_11.png'
import i from './Blog.module.css'
import { useState } from 'react'
const Blog = () => {
  return (
    <div>
      <div className={i.foto}>
      <div>
        <img src={logol} />
        <img src={iclo} />
      </div>
      <div>
        <h1>Subscription index</h1>
        <p>A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
      </div>
      </div>
     <div className={i.text}>
       <h2>INTRODUCTION</h2>
       <p>The Subscription Economy Index™ (SEI) is based on anonymized, aggregated, system-generated
activity on the Zuora service, a comprehensive billing and finance platform for subscription-based businesses. It reflects the growth metrics of hundreds of companies around the world, and spans a number
of industries including SaaS, media, telecommunications and corporate services.
The breadth and depth of the billing reflected in this study speak to the rapid ascent of the
Subscription Economy. Gartner predicts that by 2020, more than 80% of software providers will have
shifted to subscription-based business models. In addition, IDC predicts that by 2020 50% of the world’s
largest enterprises will see the majority of their business depend on their ability to create digitally
enhanced products, services and experiences.
Recurring revenue-based business models are not new, but they have exploded in recent years
owing to cloud-enabled, pay-as-you-go services. As globalization has placed increasing margin strains
on manufacturing and product sales, subscription-based businesses have benefited from stable and predictable revenue projections, data-driven insights from direct consumer relationships, and large economies of scale owing to relatively small fixed costs.
This study was conducted by Zuora Chief Data Scientist Carl Gold. </p>
     </div>
    </div>
  )
}

export default Blog