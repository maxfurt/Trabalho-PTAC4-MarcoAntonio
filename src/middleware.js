'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = async (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlDashboard = new URL('/pages/dashboard', request.url)
    const urlRegister = new URL('/pages/register', request.url)
    const urlAlter = new URL('/pages/alter', request.url)
    const isTokenValidated = await validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/register') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/alter') {
            return NextResponse.redirect(urlLogin);
        }
    }
    if (isTokenValidated) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlDashboard);
        }
    }

   

   
    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/register', '/pages/alter']
};

