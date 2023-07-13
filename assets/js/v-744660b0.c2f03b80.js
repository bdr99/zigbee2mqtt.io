"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[77935],{157420:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-744660b0","path":"/guide/configuration/ota-device-updates.html","title":"OTA device firmware update","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"OTA Index override file","slug":"ota-index-override-file","link":"#ota-index-override-file","children":[]}],"git":{"updatedTime":1689272082000},"filePathRelative":"guide/configuration/ota-device-updates.md"}')},185582:(e,a,n)=>{n.r(a),n.d(a,{default:()=>o});var s=n(166252);const t=(0,s._)("h1",{id:"ota-device-firmware-update",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#ota-device-firmware-update","aria-hidden":"true"},"#"),(0,s.Uk)(" OTA device firmware update")],-1),i=(0,s.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Optional: OTA update settings</span>\n<span class="token comment"># See https://www.zigbee2mqtt.io/guide/usage/ota_updates.html for more info</span>\n<span class="token key atrule">ota</span><span class="token punctuation">:</span>\n    <span class="token comment"># Optional: use IKEA TRADFRI OTA test server, see OTA updates documentation (default: false)</span>\n    <span class="token key atrule">ikea_ota_use_test_url</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n    <span class="token comment"># Minimum time between OTA update checks</span>\n    <span class="token key atrule">update_check_interval</span><span class="token punctuation">:</span> <span class="token number">1440</span>\n    <span class="token comment"># Disable automatic update checks</span>\n    <span class="token key atrule">disable_automatic_update_check</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ota-index-override-file" tabindex="-1"><a class="header-anchor" href="#ota-index-override-file" aria-hidden="true">#</a> OTA Index override file</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">ota</span><span class="token punctuation">:</span>\n    <span class="token key atrule">zigbee_ota_override_index_location</span><span class="token punctuation">:</span> my_index.json\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Value of this key is a file name in the configuration directory (next to <code>configuration.yaml</code>). The file name could be also a full path to the file, taking into account that host file system may not be available when running Zigbee2MQTT inside a docker container.</p><p>Alternatively, Zigbee2MQTT supports index files located on a remote HTTP(s) server. In this case <code>zigbee_ota_override_index_location</code> key should be an URL of the index file.</p>',5),l={},o=(0,n(983744).Z)(l,[["render",function(e,a){const n=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[t,(0,s._)("p",null,[(0,s.Uk)("Also see the "),(0,s.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,s.w5)((()=>[(0,s.Uk)("OTA firmware update usage guide")])),_:1}),(0,s.Uk)(".")]),i,(0,s._)("p",null,[(0,s.Uk)("Please refer to "),(0,s.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,s.w5)((()=>[(0,s.Uk)("OTA firmware update usage guide")])),_:1}),(0,s.Uk)(" for more details how Zigbee2MQTT fetches OTA images, how to add an image for a DIY device, or how to override official images with other ones.")])])}]])}}]);