import React from 'react';
import Timeline from './Timeline';

function Service(props) {
  const { stack, alerts } = props;

  const deployment = stack.deployment;

  return (
    <>
      <div className="w-full flex items-center justify-between space-x-6 bg-white pb-6 rounded-lg border border-neutral-300 shadow-lg">
        <div className="flex-1">
          <h3 className="flex text-lg font-bold rounded p-4">
            <span className="cursor-pointer">{stack.service.name}</span>
            <>
            <div className="flex items-center ml-auto space-x-2">
              { deployment &&
              <>
              <button
                className="bg-transparent hover:bg-neutral-100 font-medium text-sm text-neutral-700 py-1 px-4 border border-neutral-300 rounded"
                >
                Logs
              </button>
              <button
                className="bg-transparent hover:bg-neutral-100 font-medium text-sm text-neutral-700 py-1 px-4 border border-neutral-300 rounded">
                Describe
              </button>
              </>
              }
            </div>
            </>
          </h3>
          <div>
            <div className="grid grid-cols-12 mt-4 px-4">
              <div className="col-span-5 border-r space-y-4">
                <div>
                  <p className="text-base text-neutral-600">Pods</p>
                  {
                    deployment && deployment.pods && deployment.pods.map((pod) => (
                      <Pod key={pod.name} pod={pod} />
                    ))
                  }
                </div>
                <div>
                  <p className="text-base text-neutral-600">Dependencies</p>
                  configmaps.. secrets.. (with view action)
                </div>
                <div>
                  <p className="text-base text-neutral-600">Links</p>
                  <div className="text-neutral-700 text-sm mt-2">
                  <a
                    className="text-neutral-600 hover:text-black"
                    href="">
                    Docs
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="inline fill-current h-4 w-4"
                      viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </a>
                  <span className="px-2">|</span>
                  <a
                    className="text-neutral-600 hover:text-black" 
                    href="">
                    Logs
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="inline fill-current h-4 w-4"
                      viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </a>
                  <span className="px-2">|</span>
                  <a
                    className="text-neutral-600 hover:text-black"
                    href="">
                    Metrics
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="inline fill-current h-4 w-4"
                      viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </a>
                  <span className="px-2">|</span>
                  <a
                    className="text-neutral-600 hover:text-black"
                    href="">
                    Traces
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="inline fill-current h-4 w-4"
                      viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </a>
                  <span className="px-2">|</span>
                  <a
                    className="text-neutral-600 hover:text-black"
                    href="">
                    Issues
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="inline fill-current h-4 w-4"
                      viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </a>
                </div>
                </div>
              </div>
              <div className="col-span-7 space-y-4 pl-2">
                { deployment &&
                <div>
                  <p className="text-base text-neutral-600">Address</p>
                  <div className="text-neutral-900 text-sm">
                    <div className="relative">
                    {stack.service.name}.{stack.service.namespace}.svc.cluster.local
                    <button
                      className="absolute right-0 bg-transparent hover:bg-neutral-100 font-medium text-sm text-neutral-700 py-1 px-4 border border-neutral-300 rounded">
                      Port-forward command
                    </button>
                    </div>
                    {stack.ingresses ? stack.ingresses.map((ingress) =>
                      <p key={`${ingress.namespace}/${ingress.name}`}>
                        <a href={'https://' + ingress.url} target="_blank" rel="noopener noreferrer">{ingress.url}
                        <svg xmlns="http://www.w3.org/2000/svg"
                          className="inline fill-current ml-1 h-4 w-4"
                          viewBox="0 0 24 24">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                        </svg>
                        </a>
                      </p>
                      ) : null
                    }
                  </div>
                </div>
                }
                { deployment &&
                <div>
                  <p className="text-base text-neutral-600">Health</p>
                  <div className="text-neutral-900 text-sm">
                    <Timeline alerts={alerts} />
                  </div>
                </div>
                }
                <div>
                  <p className="text-base text-neutral-600">Sync</p>
                  Last sync time, state, ref to kustomization
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;

function Pod(props) {
  const {pod} = props;

  let color;
  let pulsar;
  switch (pod.status) {
    case 'Running':
      color = 'bg-green-200';
      pulsar = '';
      break;
    case 'PodInitializing':
    case 'ContainerCreating':
    case 'Pending':
      color = 'bg-blue-300';
      pulsar = 'animate-pulse';
      break;
    case 'Terminating':
      color = 'bg-neutral-500';
      pulsar = 'animate-pulse';
      break;
    default:
      color = 'bg-red-600';
      pulsar = '';
      break;
  }

  return (
    <span className={`inline-block mr-1 mt-2 shadow-lg ${color} ${pulsar} font-bold px-2 cursor-default`} title={`${pod.name} - ${pod.status}`}>
      {pod.status}
    </span>
  );
}
