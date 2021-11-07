import React from 'react'
import LogoutButton from './LogoutButton'
import Router from './Router'

export default function Layout() {
    return (
        <>
            <Router/>
            <LogoutButton/>
        </>
    )
}
