import React from 'react';

function NestedLayout({children}) {
    return (
        <div>
            per-Page layout
            {children}
        </div>
    );
}

export default NestedLayout;