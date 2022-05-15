import React from 'react'
import ContentLoader from "react-content-loader"
function LoadingBlock() {
    return(
        <ContentLoader 
          speed={2}
          width={260}
          height={457}
          viewBox="0 0 260 457"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="124" cy="140" r="123" /> 
          <rect x="0" y="269" rx="2" ry="2" width="260" height="31" /> 
          <rect x="0" y="308" rx="5" ry="5" width="260" height="59" /> 
          <rect x="-4" y="385" rx="0" ry="0" width="78" height="23" /> 
          <rect x="141" y="377" rx="12" ry="12" width="117" height="33" />
        </ContentLoader>
        )
}

export default LoadingBlock