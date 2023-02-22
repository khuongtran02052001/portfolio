import React from 'react'
export default function Loading() {
    return <div className="w-full px-4 m-10 mx-auto  rounded-md shadow ">
        <div className="space-x-4 animate-pulse">
            <div className="flex-1">
                <div className="space-y-2">
                    <MiniLoading />
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <MiniLoading />
                    <MiniLoading />
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <MiniLoading />
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <MiniLoading />
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <MiniLoading />
                </div>
            </div>
        </div>
    </div>

}

const MiniLoading = () => <div className="flex gap-3 mt-auto">
    <div className="w-20 h-8 bg-gray-400 rounded-full animate-pulse">
    </div>
    <div className="w-20 h-8 bg-gray-400 rounded-full animate-pulse">
    </div>
    <div className="w-20 h-8 ml-auto bg-gray-400 rounded-full animate-pulse">
    </div>
    <div className="w-20 h-8 ml-auto bg-gray-400 rounded-full animate-pulse">
    </div><div className="w-20 h-8 ml-auto bg-gray-400 rounded-full animate-pulse">
    </div><div className="w-20 h-8 ml-auto bg-gray-400 rounded-full animate-pulse">
    </div><div className="w-20 h-8 ml-auto bg-gray-400 rounded-full animate-pulse">
    </div><div className="w-20 h-8 ml-auto bg-gray-400 rounded-full animate-pulse">
    </div>
</div>