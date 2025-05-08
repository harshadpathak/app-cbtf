import React from 'react'

export const Sidebar = () => {
  return (
    <div>
        <div className="sidebar" data-background-color="white">
          <div className="sidebar-logo">
            <div className="logo-header" data-background-color="dark2">
              <a href="index.html" className="logo">
                <img
                  src="assets/img/logo.png"
                  alt="navbar brand"
                  className="navbar-brand"
                />
              </a>
              <div className="nav-toggle">
                <button className="btn btn-toggle toggle-sidebar">
                  <i className="gg-menu-right"></i>
                </button>
                <button className="btn btn-toggle sidenav-toggler">
                  <i className="gg-menu-left"></i>
                </button>
              </div>
              <button className="topbar-toggler more">
                <i className="gg-more-vertical-alt"></i>
              </button>
            </div>
          </div>
          <div className="sidebar-wrapper scrollbar scrollbar-inner">
            <div className="sidebar-content">
              <ul className="nav nav-secondary">
                <li className="nav-item active">
                  <a href="">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg></i> <p>Home</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg></i> <p>In-Pay</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#cricket" className="collapsed" aria-expanded="false">
                    <i>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.05 12.81L6.56 4.32a.996.996 0 00-1.41 0L2.32 7.15a.996.996 0 000 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83a.996.996 0 000-1.41zM14.341 17.756l1.414-1.414 4.243 4.243-1.414 1.414z"></path><circle cx="18.5" cy="5.5" r="3.5"></circle></svg>
                    </i>
                    <p>Cricket</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="cricket">
                    <ul className="nav nav-collapse">
                      <li>
                        <a data-bs-toggle="collapse" href="#cricket1">
                          <span className="sub-item">Womens One Day Internationals</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="cricket1">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">South Africa Women v India Women</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" href="#cricket2">
                          <span className="sub-item">Pakistan Super League</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="cricket2">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Pakistan Super League</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Islamabad United v Quetta Gladiators</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Peshawar Zalmi v Karachi Kings</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" href="#cricket3">
                          <span className="sub-item"> West indies T20 Breakout League</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="cricket3">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Jamaica Titans v Windward Islands Infernos</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Barbados Pelicans v Guyana Rainforest Rangers</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" href="#cricket4">
                          <span className="sub-item"> ICC Cricket World Cup League 2</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="cricket4">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Netherlands v United Arab Emirates</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#soccer">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M255.03 33.813c-1.834-.007-3.664-.007-5.5.03-6.73.14-13.462.605-20.155 1.344.333.166.544.32.47.438L204.78 75.063l73.907 49.437-.125.188 70.625.28L371 79.282 342.844 52c-15.866-6.796-32.493-11.776-49.47-14.78-12.65-2.24-25.497-3.36-38.343-3.407zM190.907 88.25l-73.656 36.78-13.813 98.407 51.344 33.657 94.345-43.438 14.875-76.5-73.094-48.906zm196.344.344l-21.25 44.5 36.75 72.72 62.063 38.905 11.312-21.282c.225.143.45.403.656.75-.77-4.954-1.71-9.893-2.81-14.782-6.446-28.59-18.59-55.962-35.5-79.97-9.07-12.872-19.526-24.778-31.095-35.5l-20.125-5.342zm-302.656 23c-6.906 8.045-13.257 16.56-18.938 25.5-15.676 24.664-26.44 52.494-31.437 81.312C31.783 232.446 30.714 246.73 31 261l20.25 5.094 33.03-40.5L98.75 122.53l-14.156-10.936zm312.719 112.844l-55.813 44.75-3.47 101.093 39.626 21.126 77.188-49.594 4.406-78.75-.094.157-61.844-38.783zm-140.844 6.406l-94.033 43.312-1.218 76.625 89.155 57.376 68.938-36.437 3.437-101.75-66.28-39.126zm-224.22 49.75c.91 8.436 2.29 16.816 4.156 25.094 6.445 28.59 18.62 55.96 35.532 79.968 3.873 5.5 8.02 10.805 12.374 15.938l-9.374-48.156.124-.032-27.03-68.844-15.782-3.968zm117.188 84.844l-51.532 8.156 10.125 52.094c8.577 7.49 17.707 14.332 27.314 20.437 14.612 9.287 30.332 16.88 46.687 22.594l62.626-13.69-4.344-31.124-90.875-58.47zm302.437.5l-64.22 41.25-42 47.375 4.408 6.156c12.027-5.545 23.57-12.144 34.406-19.72 23.97-16.76 44.604-38.304 60.28-62.97 2.51-3.947 4.87-7.99 7.125-12.092zm-122.78 97.656l-79.94 9.625-25.968 5.655c26.993 4 54.717 3.044 81.313-2.813 9.412-2.072 18.684-4.79 27.75-8.062l-3.156-4.406z"></path></svg></i>
                    <p>Soccer</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="soccer">
                    <ul className="nav nav-collapse">
                      <li>
                        <a data-bs-toggle="collapse" href="#soccer1">
                          <span className="sub-item">Scottish Soccer</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="soccer1">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Partick v Ayr</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" href="#soccer2">
                          <span className="sub-item">Mexican Soccer</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="soccer2">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Monterrey v Toluca</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Pachuca v CF America</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" href="#soccer3">
                          <span className="sub-item">Egyptian Soccer</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="soccer3">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Smouha v El Geish</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">ZED FC v Al Ittihad (EGY)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">El Gounah v Future FC</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Ismaily v ENPPI</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" href="#soccer4">
                          <span className="sub-item">CONMEBOL Soccer</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="soccer4">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Atletico Bucaramanga v Racing Club</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">EC Vitoria Salvador v Defensa y Justicia</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Sportivo Luqueno v Godoy Cruz</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Fortaleza EC v Colo Colo</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Boston River v CA Independiente</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Corinthians v America de Cali S.A</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Bahia v Nacional (Uru) </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Union Santa Fe v Palestino</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Puerto Cabello v Vasco Da Gama</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Central Cordoba (SdE) v Flamengo</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Cerro Porteno v SE Palmeiras</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#tennis" className="collapsed" aria-expanded="false">
                    <i>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M250.4 464c1-7.9 1.6-15.9 1.6-23.9 0-48.1-18.7-94.3-52.7-128.3S119 260 70.9 260c-7.7 0-15.4.5-22.9 1.4 2.8 110.3 92.3 199.3 202.4 202.6z"></path><path d="M230 74c0-8.3.5-16.4 1.4-24.5-95.3 11.7-171.7 89-182.2 184.7 7.2-.7 14.4-1.1 21.8-1.1 114.9 0 207.1 92.2 207.1 207 0 7.7-.4 15.3-1.3 22.8 96.6-10.1 174.6-86.2 185.8-182.4-8.4 1-16.9.6-25.5.6C322.1 281 230 188.9 230 74z"></path><path d="M308.7 202.3c34 34 80.2 52.7 128.3 52.7 9.1 0 18.1-.7 27-2-2.2-112-93.9-203.5-206.1-205-1.2 8.5-1.9 17.2-1.9 26 0 48.1 18.7 94.3 52.7 128.3zM232 49.3z"></path></svg>
                    </i>
                    <p>Tennis</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="tennis">
                    <ul className="nav nav-collapse">
                      <li>
                        <a data-bs-toggle="collapse" href="#tennis1">
                          <span className="sub-item">Wuxi Challenger 2025</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="tennis1">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Sun v Escoffier</span>
                              </a>
                            </li>

                            <li>
                              <a href="#">
                                <span className="sub-item">Yo Watanuki v Ry Peniston</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" href="#tennis2">
                          <span className="sub-item">Francavilla al Mare Challenger 2025</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="tennis2">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Albot v Ig Buse</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Carboni v Sanchez Jover</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Denolly v Maestrelli</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Dom Stricker v Jubb</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Cachin v Trungelliti</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Mena v Vatutin</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Paire v Gi Fonio</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Skatov v Ju Engel</span>
                              </a>
                            </li>
                              <li>
                                <a href="#">
                                  <span className="sub-item">Travaglia v Karatsev</span>
                                </a>
                            </li>  
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" href="#tennis3">
                          <span className="sub-item">Prague Challenger 2025</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="tennis3">
                          <ul className="nav nav-collapse subnav">
                            <li>
                                <a href="#">
                                  <span className="sub-item">Ha Habib v Blockx</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                  <span className="sub-item">Mrva v Kukushkin</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                  <span className="sub-item">Evans v Ma Landaluce</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                  <span className="sub-item">Chazal v Zhukayev</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                  <span className="sub-item">Hy Barton v Neumayer</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                  <span className="sub-item">J Kumstat v Misolic</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                  <span className="sub-item">Nagal v Den Ouden</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                  <span className="sub-item">Popko v Gueymard Wayenburg</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                  <span className="sub-item">Rottgering v Da Rincon</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                  <span className="sub-item">Vi Sachko v Hemery</span>
                                </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" href="#tennis4">
                          <span className="sub-item">Santos Challenger 2025</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="tennis4">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">E Ribeiro v Mat Pucinelli de Almeid</span>
                              </a>
                          </li>    
                          <li>
                              <a href="#">
                                <span className="sub-item">L Midon v Sanchez Izquierdo</span>
                              </a>
                          </li>    
                          <li>
                              <a href="#">
                                <span className="sub-item">Mager v Jua Varillas</span>
                              </a>
                          </li>    
                          <li>
                              <a href="#">
                                <span className="sub-item">Ni Alvarez Varona v Go Bueno</span>
                              </a>
                          </li>    
                          <li>
                              <a href="#">
                                <span className="sub-item">Olivieri v Jo Reis Da Silva</span>
                              </a>
                          </li>    
                          <li>
                              <a href="#">
                                <span className="sub-item">Sant Rodriguez Taverna v Casanova</span>
                              </a>
                          </li>    
                          <li>
                              <a href="#">
                                <span className="sub-item">Villanueva v Mateus Alves</span>
                              </a>
                          </li>    
                          <li>
                              <a href="#">
                                <span className="sub-item">Bru Kuzuhara v Conn Huertas Del Pino</span>
                              </a>
                          </li>    
                          <li>
                              <a href="#">
                                <span className="sub-item">Huertas Del Pino Cordov v Prado Angelo</span>
                              </a>
                          </li>    
                          <li>
                              <a href="#">
                                <span className="sub-item">J Pereira v Boscardin Dias</span>
                              </a>
                          </li>    
                          <li>
                              <a href="#">
                                <span className="sub-item">Leite v Kicker</span>
                              </a>
                          </li>    
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" href="#tennis5">
                          <span className="sub-item">ATP Rome 2025</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="tennis5">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Altmaier v Comesana</span>
                              </a>
                          </li>   
                          <li>
                            <a href="#">
                                <span className="sub-item">Arnaldi v Bautista Agut</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Bonzi v Halys</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Bublik v Safiullin</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Djere v To Etcheverry</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Fearnley v Fognini</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">G Diallo v Giron</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Hug Gaston v Jarry</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Le Tien v Opelka</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Lehecka v A Muller</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Lu Nardi v Cobolli</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Ma Bellucci v Martinez</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Marozsan v Jo Fonseca</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Navone v Fe Cina</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Nishioka v Struff</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Ri Hijikata v Moutet</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Rinderknech v Gigante</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">T Griekspoor v Kecmanovic</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Thompson v Mpetshi Perricard</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Yu Bu v Darderi</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Barrios Vera v Royer</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Chun  Tseng v Manuel Cerundolo</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Dellien v Gaubas</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">F Arnaboldi v Ot Virtanen</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">J De Jong v Th Seyboth Wild</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Nicol Moreno de Alboran v Zeppieri</span>
                            </a>
                          </li>  
                          <li>
                            <a href="#">
                                <span className="sub-item">Norrie v Lajovic</span>
                            </a>
                          </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" href="#tennis6">
                          <span className="sub-item">WTA Rome 2025</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="tennis6">
                          <ul className="nav nav-collapse subnav">
                            <li>
                                <a href="#">
                                  <span className="sub-item">Al Eala v M Kostyuk</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Aly Parks v J Cristian</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Andreescu v Fed Urgesi</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Azarenka v Ca Osorio</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Birrell v Kartal</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">D Yastremska v A Potapova</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Dolehide v S Cirstea</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">El Cocciaretto v El Avanesyan</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Errani v N Osaka</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">K Siniakova v O Danilovic</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Kvitova v I Begu</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">L Bronzetti v Sevastova</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Lamens v Zarazua</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">M Bouzkova v M Sherif</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Pavlyuchenkova v Boulter</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Pe Stearns v Nur Brancaccio</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Pedone v Lulu Sun</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Sramkova v McCartn Kessler</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Stefanini v V Kudermetova</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Uchijima v Eva Lys</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Vondrousova v Xin Wang</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Blinkova v Todoni</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">E Ruse v Siegemund</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">El Seidel v A Bondar</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Emil Arango v Leol Jeanjean</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">H Baptiste v J Teichmann</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Ma Joint v Golubic</span>
                                </a>
                            </li>    	
                            <li>
                                <a href="#">
                                  <span className="sub-item">Rakhimova v Vi Mboko</span>
                                </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"></path></svg></i> <p>Original</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M400 16c-21.335 9.73-58.244 17.34-73.086 48.232-22.36 1.948-72.753 10.673-122.22 40.25-58.098 34.74-116.017 97.417-131.776 213.702l-.48 3.537-2.774 2.25c-30.87 25.002-40.657 38.937-44.416 61.153-3.536 20.9-.72 51.46-.363 101.877H328.36c3.455-16.892 10.44-29.245 12.472-41.568 2.337-14.176.19-29.938-20.812-58.547-43.078-58.683-46.853-129.458-12.916-171.28-8.654-2.765-15.09-6.887-19.458-12.546-6.115-7.924-7.4-17.006-8.57-25.884l17.848-2.352c1.112 8.446 2.38 13.88 4.97 17.237 2.59 3.356 7.31 6.472 19.55 8.46l-.022.128.172-.17 5.998 9.424c19.957 31.358 42.84 51.292 73.332 54.44l6.51.672 1.367 6.4c2.74 12.828 8.626 19.095 15.116 22.238 6.49 3.143 14.225 2.944 20.47.205 9.316-4.086 14.518-11.35 16.7-22.712 2.122-11.05.546-25.834-5.137-42.106-33.538-38.248-44.475-87.277-63.903-128.772-6.055-9.947-12.448-18.518-20.385-24.856C376.808 55.126 386.456 34.852 400 16zM214.068 34.97C179.55 35.06 146.075 43.06 96 58.58c31.146 9.92 70.397 18.9 86.037 39.01 4.463-3.017 8.94-5.88 13.418-8.56 40.51-24.22 80.387-35.286 108.23-40.04-35.854-9.477-63.047-14.094-89.617-14.023zM157.16 96.712c-1.13-.01-2.265-.01-3.402.004-30.353.37-63.1 9.745-96.647 31.283 27.186 3.672 54.67 3.724 72.58 15.398 15.9-17.92 33.144-32.634 50.677-44.668-7.548-1.244-15.292-1.938-23.207-2.017zM368 128a13.214 13.215 0 0 1 13.213 13.215A13.214 13.215 0 0 1 368 154.432a13.214 13.215 0 0 1-13.213-13.217A13.214 13.215 0 0 1 368 128zm-238.906 16.068c-36.395 1.495-68.903 6.53-104.76 24.766 33.236 7.095 50.913 13.507 65.025 33.83 11.522-22.53 25.045-41.93 39.734-58.596zM74.518 201.46C53.53 201.65 36.614 213.14 16 224c27.854 0 46.067 3.862 58.71 12.055 4.33-11.652 9.16-22.615 14.41-32.924-5.12-1.19-9.963-1.71-14.602-1.67zm-.623 36.82c-17.933 5.845-35.452 7.15-54.23 22.284 17.62 4.638 34.79 9.596 41.398 22.034 3.496-15.77 7.814-30.523 12.832-44.32zm370.142 8.57c1.617-.035 3.222.044 4.783.187l-1.64 17.926c-3.928-.36-5.513.416-5.57.465-.058.048-1.035.656-.635 5.886l-17.95 1.372c-.638-8.35 1.297-16.207 6.955-20.997 4.245-3.593 9.206-4.735 14.057-4.84zM52.215 290.723c-10.352.13-23.76 5.646-34.656 12.334 12.173 6.83 12.357 23.472 8.938 37.668 7.3-9.105 16.855-18.323 29.158-28.48 1.016-7.043 2.19-13.9 3.506-20.585-2.082-.67-4.42-.97-6.947-.937z"></path></svg></i>
                    <p>Horse Racing</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M386.688 487.75l-119.236-55.423c-7.898-3.673-11.334-13.065-7.66-20.976l84.374-181.523c3.667-7.904 13.07-11.334 20.963-7.667l119.24 55.434c7.9 3.673 11.33 13.065 7.656 20.964l-84.37 181.524c-3.678 7.904-13.076 11.334-20.968 7.667zM98.95 467.945L19.79 284.09c-3.448-8.007.255-17.302 8.25-20.744l39.196-16.872 48.975 184.044c4.694 17.588 22.755 28.078 40.36 23.39l39.032-10.386-75.907 32.686c-8.007 3.443-17.296-.255-20.744-8.262zm33.89-41.86L81.362 232.638c-2.24-8.42 2.78-17.078 11.19-19.312l34.033-9.052-4.098 30.465c-2.422 18.036 10.224 34.652 28.285 37.087l79.828 10.758-32.497 109.467c-3.345 11.28-.37 22.948 6.866 31.18l-52.82 14.05c-8.42 2.24-17.07-2.77-19.31-11.196zm108.428-4.76l-16.02-4.76c-8.36-2.49-13.12-11.267-10.644-19.627l56.97-191.9c2.484-8.36 11.28-13.12 19.622-10.65l49.073 14.583.008-.005.12.044-.133-.034c-4.93 3.254-9.04 7.868-11.705 13.605l-84.38 181.53c-2.587 5.586-3.486 11.517-2.915 17.218zm-5.707-155.43l-82.486-11.117c-8.633-1.166-14.704-9.12-13.538-17.758l26.73-198.39c1.16-8.633 9.125-14.698 17.74-13.538l130.327 17.563c8.627 1.166 14.692 9.125 13.532 17.752L311.42 182.46l-15.33-4.552c-17.467-5.197-35.826 4.784-41.004 22.232l-19.525 65.755zm-5.19-31.46c4.67-3.055 7.474-7.438 8.42-13.145.936-5.633-.357-10.617-3.866-14.945-3.51-4.414-8.39-7.14-14.656-8.178-6.344-1.057-11.93-.073-16.75 2.956-4.826 3.03-7.692 7.316-8.615 12.87-.898 5.386.425 10.42 3.97 15.082 3.565 4.504 8.525 7.285 14.863 8.34 6.35 1.057 11.893.062 16.634-2.98zm25.978-81.243c4.693-2.726 8.888-5.434 12.598-8.117 3.703-2.684 6.915-5.586 9.635-8.725 2.72-3.13 4.967-6.573 6.733-10.307 1.76-3.74 3.048-8.032 3.85-12.865 1.262-7.62 1.02-14.358-.735-20.234-1.75-5.87-4.693-10.94-8.833-15.22-4.135-4.27-9.24-7.753-15.318-10.43-6.07-2.684-12.804-4.633-20.174-5.86-7.692-1.28-15.3-1.602-22.815-.977-7.516.614-14.63 2.247-21.346 4.88l-5.95 35.802c6.813-4.25 13.77-7.104 20.855-8.567 7.09-1.475 13.726-1.7 19.913-.668 21.467 4.092 19.44 24.898 8.76 34.03-5.652 4.473-11.334 8.802-15.942 11.345-10.48 5.914-27.69 23.125-22.542 45.145l31.284 5.202c-7.11-17.757 11.663-29.462 20.028-34.434z"></path></svg></i>
                    <p>Casino</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M331.088 488.95l-101.23-47.053c-6.698-3.122-9.62-11.094-6.503-17.815l71.63-154.11c3.117-6.71 11.1-9.624 17.804-6.508l101.23 47.066c6.71 3.115 9.62 11.088 6.51 17.797l-71.64 154.11c-3.12 6.714-11.098 9.618-17.802 6.514zM86.8 472.134L19.596 316.04c-2.927-6.797.218-14.686 7.004-17.607l33.275-14.328 41.578 156.25c3.99 14.937 19.32 23.84 34.267 19.864l33.14-8.823-64.445 27.752c-6.798 2.92-14.687-.22-17.614-7.017zm28.774-35.535L71.87 272.362c-1.905-7.152 2.362-14.498 9.502-16.398l28.89-7.683-3.475 25.864c-2.06 15.313 8.68 29.423 24.01 31.488l67.774 9.135-27.586 92.934c-2.845 9.578-.313 19.486 5.83 26.472l-44.847 11.926c-7.146 1.906-14.493-2.35-16.393-9.5zm92.055-4.043l-13.603-4.042c-7.1-2.112-11.14-9.565-9.034-16.664l48.364-162.92c2.112-7.1 9.577-11.14 16.658-9.04l41.667 12.38.006-.006.112.035-.118-.03c-4.19 2.76-7.677 6.68-9.937 11.547L210.1 417.944c-2.194 4.733-2.96 9.772-2.47 14.61zm-4.846-131.957l-70.033-9.44c-7.328-.992-12.48-7.743-11.494-15.078l22.695-168.43c.987-7.33 7.75-12.48 15.06-11.496l110.65 14.912c7.322.99 12.48 7.748 11.488 15.07l-13.96 103.622-13.02-3.866c-14.828-4.408-30.412 4.066-34.808 18.878l-16.576 55.828zm253.322-8.668l-7.253-15.94 37.418-16.98 7.23 15.95-37.394 16.97zm-9.353-27.805l-32.792-72.222c11.484-2.738 22.354-7.624 32.026-14.41l32.726 72.133-31.96 14.5zm-83.41-88.155c-41.006-16.174-61.152-62.585-44.977-103.603 16.18-40.993 62.603-61.15 103.603-44.977 41.01 16.18 61.15 62.604 44.982 103.62-16.187 40.995-62.604 61.147-103.61 44.96zm86.378-51.78c12.434-31.488-3.038-67.135-34.55-79.563-31.493-12.427-67.14 3.045-79.58 34.544-12.427 31.5 3.05 67.16 34.557 79.58 31.5 12.43 67.146-3.043 79.574-34.56zm-30.106-16.96c1.96-22.547-12.634-42.758-33.676-48.653 3.86-.732 7.9-.956 12.014-.602 24.27 2.1 42.292 23.492 40.197 47.768-2.078 23.94-22.914 41.79-46.766 40.274 15.366-6.48 26.702-21.03 28.23-38.787z"></path></svg></i>
                    <p>Int Casino</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#virtual">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 00352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 00-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0018.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 01-32 0v-32h-32a16 16 0 010-32h32v-32a16 16 0 0132 0v32h32a16 16 0 010 32zm84 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-19.95A20 20 0 01336 288zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z"></path></svg></i>
                    <p>Virtual</p>
                    <span className="caret"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#boxing">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M141.977 56.943c-.635.004-1.27.02-1.905.053-2.903.145-5.805.58-8.7 1.326-28.33 7.294-56.425 29.248-77.058 57.844-20.632 28.596-33.67 63.593-33.554 95.455.06 16.533 6.94 27.84 18.886 36.927 7.29 5.544 16.59 9.97 27.032 13.23-1.023-14.32-.482-29.776 3.957-42.71l16.844 5.783c-15.886 57.862 18.713 102.134 69.65 142.007-2.305-28.866 2.355-59.986 15.7-91.345-1.265-7.76-1.14-16.392.57-25.664 4.65-25.21 20.01-56.115 49.88-93.414l14.59 11.68c-28.65 35.777-42.302 64.575-46.09 85.122-3.79 20.548 1.342 31.848 10.048 38.176 8.706 6.328 23.24 8.047 40.315 2.526 17.073-5.522 36.13-18.136 52.42-38.405 40.154-49.957 56.8-91.026 58.064-120.484 1.265-29.46-11.115-47.414-32.752-56.937C276.602 59.067 191.21 80.82 119.7 162.938l-14.095-12.272c26.81-30.786 55.632-54.11 84.143-70.29-15.18-14.578-31.464-23.538-47.77-23.433zm230.76 85.89c-.65-.005-1.303.005-1.956.01-3.553 34.283-22.66 75.888-61.65 124.397-18.358 22.844-40.163 37.666-61.237 44.48-21.075 6.816-41.974 5.77-57.053-5.19-2.737-1.99-5.203-4.298-7.387-6.887-20.753 63.805-2.12 122.793 34.906 158.587 25.613 24.76 60.005 38.354 97.472 34.727 37.467-3.627 78.5-24.527 116.943-70.998 84.462-102.102 71.214-199.61 19.823-247.646-21.08-19.702-48.703-31.302-79.862-31.482z"></path></svg></i>
                    <p>Boxing</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="boxing">
                    <ul className="nav nav-collapse">
                    <li>
                      <a data-bs-toggle="collapse" href="#boxing1">
                        <span className="sub-item">Boxing Matches</span>
                        <span className="caret"></span>
                      </a>
                      <div className="collapse" id="boxing1">
                        <ul className="nav nav-collapse subnav">
                          <li>
                            <a href="#">
                              <span className="sub-item">Gilberto Ramirez v Yuniel Dorticos</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Leigh Wood v Anthony Cacace</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Angelo Leo v Tomoki Kameda</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Caleb Plant v Jose Armando Resendiz</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Eduardo Nunez v Masanori Rikiishi</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Emanuel Navarrete v Charly Suarez</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Fabio Wardley v Jarrell Miller</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Fernando Daniel Martinez v Kazuto Ioka</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Jermall Charlo v Thomas LaManna</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Johnny Fisher v David Allen</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Josh Taylor v Ekow Essuman</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Katie Taylor v Amanda Serrano</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Raymond Muratalla v Zaur Abdullaev</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Yoshiki Takei v Yuttapong Tongdee</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Alycia Baumgardner v Jennifer Miranda</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="sub-item">Erickson Lubin v Ardreal Holmes Jr</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Liam Davies v Kurt Walker</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Maxi Hughes v Archie Sharp</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Nathaniel Collins v Lee McGregor</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Ryosuke Nishida v Jose Salas Reyes</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Terri Harper v Natalie Zimmermann</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Dina Thorslund v Shurretta Metcalf</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Ellie Scotney v Yamileth Mercado</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Jai Opetaia v Claudio Squeo</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Edgar Berlanga v Hamzah Sheeraz</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Galal Yafai v Francisco Rodriguez Jr</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Jake Paul v Julio Cesar Chavez Jr</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Junto Nakatani v Ryosuke Nishida</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Keyshawn Davis v Edwin De Los Santos</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Oleksandr Usyk v Daniel Dubois</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Shabaz Masoud v Peter McGrail</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Shakur Stevenson v William Zepeda Segura</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Abdullah Mason v Jeremia Nakathila</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Moses Itauma v Mike Balogun</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Sam Goodman v Cesar Vaca Espinoza</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Serhii Bohachuk v Mykal Fox</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span className="sub-item">Tenshin Nasukawa v Victor Santillan</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      </li>  
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="collapse" href="#basketball">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M256 23C140.57 23 73.01 90.16 24.283 171.37L23 173.507V309.85l142.268 63.228C175.353 408.092 183 436.353 183 480h18c0-2.378-.028-4.703-.07-7h22.304l.405 7.484 17.973-.968-.35-6.516h29.14l-.366 6.496 17.973 1.008.422-7.504h22.64c-.042 2.3-.072 4.624-.072 7h18c0-43.265 7.505-72.296 17.453-106.797L489 309.85V173.508l-1.283-2.14C438.99 90.16 371.43 23 256 23zm0 18c107.607 0 167.912 59.792 215 137.563V298.15l-118.027 52.457c1.952-6.838 3.947-14.016 5.96-21.607H384v-34h-23V167H151v128h-23v34h25.023c1.965 7.597 3.906 14.745 5.81 21.52L41 298.15V178.563C88.088 100.793 148.393 41 256 41zm-87 144h174v110H169V185zm2.61 144h43.863l1.617 30h-37.115c-2.71-9.403-5.528-19.275-8.364-30zm61.888 0h44.982l-1.683 30h-41.682l-1.617-30zm63.012 0h43.804c-2.88 10.63-5.75 20.51-8.507 30h-36.98l1.683-30zm-111.377 48h32.928l1.618 30h-26.756c-2.27-10.02-4.922-19.86-7.79-30zm50.953 0h39.7l-1.682 30h-36.4l-1.618-30zm57.73 0h32.825c-2.83 10.065-5.443 19.92-7.683 30h-26.824l1.683-30zm-97.308 48h24.14l1.618 30h-22.14c-.762-10.673-2.002-20.55-3.618-30zm42.166 0h34.422l-1.684 30h-31.12l-1.618-30zm52.45 0h24.31c-1.59 9.476-2.808 19.37-3.563 30h-22.43l1.685-30z"></path></svg></i>
                    <p>Basketball</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="basketball">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="sidebar-style-2.html">
                          <span className="sub-item">Soccer 1</span>
                        </a>
                      </li>
                      <li>
                        <a href="icon-menu.html">
                          <span className="sub-item">Soccer 2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg></i>
                    <p>Telegram</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></i>
                    <p>Instagram</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="">
                    <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg></i>
                    <p>Chat With us</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
