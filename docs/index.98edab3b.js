function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t,n,r,i,s,o,a,l,u,h,c,f,d,p,g,m,y,v,w,E,b,_,T,C,I,S,x,A,D=globalThis,N={},k={},R=D.parcelRequire94c2;null==R&&((R=function(e){if(e in N)return N[e].exports;if(e in k){var t=k[e];delete k[e];var n={id:e,exports:{}};return N[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){k[e]=t},D.parcelRequire94c2=R);var O=R.register;O("ilpIi",function(t,n){e(t.exports,"addDoc",()=>R("9HrqM").addDoc),e(t.exports,"collection",()=>R("9HrqM").collection),e(t.exports,"doc",()=>R("9HrqM").doc),e(t.exports,"getDoc",()=>R("9HrqM").getDoc),e(t.exports,"getDocs",()=>R("9HrqM").getDocs),e(t.exports,"getFirestore",()=>R("9HrqM").getFirestore),e(t.exports,"updateDoc",()=>R("9HrqM").updateDoc),R("9HrqM")}),O("9HrqM",function(t,n){e(t.exports,"collection",()=>i6),e(t.exports,"doc",()=>i5),e(t.exports,"getFirestore",()=>i7),e(t.exports,"getDoc",()=>sN),e(t.exports,"getDocs",()=>sR),e(t.exports,"updateDoc",()=>sO),e(t.exports,"addDoc",()=>sL);var r,i,s,o,a=R("7xvHX"),l=R("eryG9"),u=R("5Z2ef"),h=R("gMVVg"),c=R("cozvr"),f=R("4rHck");R("hPtJY");var d=R("6ZWSX").Buffer;let p="@firebase/firestore",g="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}m.UNAUTHENTICATED=new m(null),m.GOOGLE_CREDENTIALS=new m("google-credentials-uid"),m.FIRST_PARTY=new m("first-party-uid"),m.MOCK_USER=new m("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y="11.3.1",v=new u.Logger("@firebase/firestore");function w(){return v.logLevel}function E(e,...t){if(v.logLevel<=u.LogLevel.DEBUG){let n=t.map(T);v.debug(`Firestore (${y}): ${e}`,...n)}}function b(e,...t){if(v.logLevel<=u.LogLevel.ERROR){let n=t.map(T);v.error(`Firestore (${y}): ${e}`,...n)}}function _(e,...t){if(v.logLevel<=u.LogLevel.WARN){let n=t.map(T);v.warn(`Firestore (${y}): ${e}`,...n)}}function T(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e="Unexpected state"){let t=`FIRESTORE (${y}) INTERNAL ASSERTION FAILED: `+e;throw b(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends h.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(m.UNAUTHENTICATED))}shutdown(){}}class N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(e){this.t=e,this.currentUser=m.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||C();let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new x;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new x,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new x)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||C(),new A(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||C(),new m(e)}}class O{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=m.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class L{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new O(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(m.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class M{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,(0,a._isFirebaseServerApp)(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){void 0===this.o||C();let n=e=>{null!=e.error&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,E("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new M(this.V));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||C(),this.R=e.token,new M(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function B(e,t){return e<t?-1:+(e>t)}function F(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}class V{static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*1e6);return new V(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new S(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new S(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new V(0,0))}static max(){return new $(new V(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j="__name__";class q{constructor(e,t,n){void 0===t?t=0:t>e.length&&C(),void 0===n?n=e.length-t:n>e.length-t&&C(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===q.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=q.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Math.sign(e.length-t.length)}static compareSegments(e,t){let n=q.isNumericId(e),r=q.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?q.extractNumericId(e).compare(q.extractNumericId(t)):e<t?-1:+(e>t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return(0,c.Integer).fromString(e.substring(4,e.length-2))}}class H extends q{construct(e,t,n){return new H(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new S(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new H(t)}static emptyPath(){return new H([])}}let K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends q{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return K.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===j}static keyField(){return new z([j])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new S(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new S(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new S(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new S(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(H.fromString(e))}static fromName(e){return new G(H.fromString(e).popFirst(5))}static empty(){return new G(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===H.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return H.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new H(e.slice()))}}class W{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new W($.min(),G.empty(),-1)}static max(){return new W($.max(),G.empty(),-1)}}class Q{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){if(e.code!==I.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof X?t:X.resolve(t)}catch(e){return X.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):X.reject(t)}static resolve(e){return new X((t,n)=>{t(e)})}static reject(e){return new X((t,n)=>{n(e)})}static waitFor(e){return new X((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=X.resolve(!1);for(let n of e)t=t.next(e=>e?X.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new X((n,r)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new X((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function J(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}Z.ae=-1;function ee(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function en(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function er(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.comparator=e,this.root=t||eo.EMPTY}insert(e,t){return new ei(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eo.BLACK,null,null))}remove(e){return new ei(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eo{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:eo.RED,this.left=null!=r?r:eo.EMPTY,this.right=null!=i?i:eo.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new eo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eo.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();let e=this.left.check();if(e!==this.right.check())throw C();return e+ +!this.isRed()}}eo.EMPTY=null,eo.RED=!0,eo.BLACK=!1,eo.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,n,r,i){return this}insert(e,t,n){return new eo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.comparator=e,this.data=new ei(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new el(this.data.getIterator())}getIteratorFrom(e){return new el(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ea)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ea(this.comparator);return t.data=e,t}}class el{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.fields=e,e.sort(z.comparator)}static empty(){return new eu([])}unionWith(e){let t=new ea(z.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eu(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return F(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.binaryString=e}static fromBase64String(e){return new ec(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eh("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new ec(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ec.EMPTY_BYTE_STRING=new ec("");let ef=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ed(e){if(e||C(),"string"==typeof e){let t=0,n=ef.exec(e);if(n||C(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:ep(e.seconds),nanos:ep(e.nanos)}}function ep(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eg(e){return"string"==typeof e?ec.fromBase64String(e):ec.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em="server_timestamp",ey="__type__",ev="__previous_value__",ew="__local_write_time__";function eE(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[ey])||void 0===n?void 0:n.stringValue)===em}function eb(e){let t=e.mapValue.fields[ev];return eE(t)?eb(t):t}function e_(e){let t=ed(e.mapValue.fields[ew].timestampValue);return new V(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t,n,r,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}let eC="(default)";class eI{constructor(e,t){this.projectId=e,this.database=t||eC}static empty(){return new eI("","")}get isDefaultDatabase(){return this.database===eC}isEqual(e){return e instanceof eI&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eS="__type__",ex="__max__",eA={mapValue:{fields:{__type__:{stringValue:ex}}}},eD="__vector__",eN="value";function ek(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eE(e)?4:eK(e)?0x1fffffffffffff:eq(e)?10:11:C()}function eR(e,t){if(e===t)return!0;let n=ek(e);if(n!==ek(t))return!1;switch(n){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return e_(e).isEqual(e_(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=ed(e.timestampValue),r=ed(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eg(e.bytesValue).isEqual(eg(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ep(e.geoPointValue.latitude)===ep(t.geoPointValue.latitude)&&ep(e.geoPointValue.longitude)===ep(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ep(e.integerValue)===ep(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ep(e.doubleValue),r=ep(t.doubleValue);return n===r?ee(n)===ee(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return F(e.arrayValue.values||[],t.arrayValue.values||[],eR);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(et(n)!==et(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eR(n[e],r[e])))return!1;return!0}(e,t);default:return C()}}function eO(e,t){return void 0!==(e.values||[]).find(e=>eR(e,t))}function eL(e,t){if(e===t)return 0;let n=ek(e),r=ek(t);if(n!==r)return B(n,r);switch(n){case 0:case 0x1fffffffffffff:return 0;case 1:return B(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=ep(e.integerValue||e.doubleValue),r=ep(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eM(e.timestampValue,t.timestampValue);case 4:return eM(e_(e),e_(t));case 5:return B(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eg(e),r=eg(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=B(n[e],r[e]);if(0!==t)return t}return B(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=B(ep(e.latitude),ep(t.latitude));return 0!==n?n:B(ep(e.longitude),ep(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return eP(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;let o=e.fields||{},a=t.fields||{},l=null===(n=o[eN])||void 0===n?void 0:n.arrayValue,u=null===(r=a[eN])||void 0===r?void 0:r.arrayValue,h=B((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:eP(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===eA.mapValue&&t===eA.mapValue)return 0;if(e===eA.mapValue)return 1;if(t===eA.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=B(r[e],s[e]);if(0!==t)return t;let o=eL(n[r[e]],i[s[e]]);if(0!==o)return o}return B(r.length,s.length)}(e.mapValue,t.mapValue);default:throw C()}}function eM(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return B(e,t);let n=ed(e),r=ed(t),i=B(n.seconds,r.seconds);return 0!==i?i:B(n.nanos,r.nanos)}function eP(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=eL(n[e],r[e]);if(t)return t}return B(n.length,r.length)}function eU(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ed(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eg(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,G.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eU(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${eU(e.fields[i])}`;return n+"}"}(e.mapValue):C()}function eB(e){return!!e&&"integerValue"in e}function eF(e){return!!e&&"arrayValue"in e}function eV(e){return!!e&&"nullValue"in e}function e$(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ej(e){return!!e&&"mapValue"in e}function eq(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[eS])||void 0===n?void 0:n.stringValue)===eD}function eH(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return en(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eH(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eH(e.arrayValue.values[n]);return t}return Object.assign({},e)}function eK(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===ex}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez{constructor(e){this.value=e}static empty(){return new ez({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ej(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eH(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eH(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());ej(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eR(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ej(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(en(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new ez(eH(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new eG(e,0,$.min(),$.min(),$.min(),ez.empty(),0)}static newFoundDocument(e,t,n,r){return new eG(e,1,t,$.min(),n,r,0)}static newNoDocument(e,t){return new eG(e,2,t,$.min(),$.min(),ez.empty(),0)}static newUnknownDocument(e,t){return new eG(e,3,t,$.min(),$.min(),ez.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual($.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ez.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ez.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eG&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eG(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e,t){this.position=e,this.inclusive=t}}function eQ(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(r=s.field.isKeyField()?G.comparator(G.fromName(o.referenceValue),n.key):eL(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function eY(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eR(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eX{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{}class eZ extends eJ{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new e6(e,t,n):"array-contains"===t?new e4(e,n):"in"===t?new e7(e,n):"not-in"===t?new e9(e,n):"array-contains-any"===t?new te(e,n):new eZ(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new e5(e,n):new e3(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eL(t,this.value)):null!==t&&ek(this.value)===ek(t)&&this.matchesComparison(eL(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class e0 extends eJ{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new e0(e,t)}matches(e){return e1(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function e1(e){return"and"===e.op}function e2(e){for(let t of e.filters)if(t instanceof e0)return!1;return!0}class e6 extends eZ{constructor(e,t,n){super(e,t,n),this.key=G.fromName(n.referenceValue)}matches(e){let t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class e5 extends eZ{constructor(e,t){super(e,"in",t),this.keys=e8("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class e3 extends eZ{constructor(e,t){super(e,"not-in",t),this.keys=e8("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function e8(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>G.fromName(e.referenceValue))}class e4 extends eZ{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eF(t)&&eO(t.arrayValue,this.value)}}class e7 extends eZ{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eO(this.value.arrayValue,t)}}class e9 extends eZ{constructor(e,t){super(e,"not-in",t)}matches(e){if(eO(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eO(this.value.arrayValue,t)}}class te extends eZ{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eF(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eO(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function tn(e,t=null,n=[],r=[],i=null,s=null,o=null){return new tt(e,t,n,r,i,s,o)}function tr(e){if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof eZ)return t.field.canonicalString()+t.op.toString()+eU(t.value);if(e2(t)&&e1(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>eU(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>eU(e)).join(",")),e.le=t}return e.le}function ti(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof eZ?n instanceof eZ&&t.op===n.op&&t.field.isEqual(n.field)&&eR(t.value,n.value):t instanceof e0?n instanceof e0&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void C()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eY(e.startAt,t.startAt)&&eY(e.endAt,t.endAt)}function ts(e){return G.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function ta(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tl(e){if(null===e.he){let t;e.he=[];let n=new Set;for(let t of e.explicitOrderBy)e.he.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new ea(z.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.he.push(new eX(t,r))}),n.has(z.keyField().canonicalString())||e.he.push(new eX(z.keyField(),r))}return e.he}function tu(e){return e.Pe||(e.Pe=function(e,t){if("F"===e.limitType)return tn(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eX(e.field,t)});let n=e.endAt?new eW(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eW(e.startAt.position,e.startAt.inclusive):null;return tn(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,tl(e))),e.Pe}function th(e,t,n){return new to(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tc(e,t){return ti(tu(e),tu(t))&&e.limitType===t.limitType}function tf(e){return`${tr(tu(e))}|lt:${e.limitType}`}function td(e){var t;let n;return`Query(target=${n=(t=tu(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eZ?`${t.field.canonicalString()} ${t.op} ${eU(t.value)}`:t instanceof e0?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(e=>eU(e)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(e=>eU(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tp(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):G.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of tl(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eQ(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tl(e),t))&&(!e.endAt||!!function(e,t,n){let r=eQ(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tl(e),t))}function tg(e){return(t,n)=>{let r=!1;for(let i of tl(e)){let e=function(e,t,n){let r=e.field.isKeyField()?G.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eL(r,i):C()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return C()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){en(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return er(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ty=new ei(G.comparator),tv=new ei(G.comparator);function tw(...e){let t=tv;for(let n of e)t=t.insert(n.key,n);return t}function tE(e){let t=tv;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tb(){return new tm(e=>e.toString(),(e,t)=>e.isEqual(t))}let t_=new ei(G.comparator),tT=new ea(G.comparator);function tC(...e){let t=tT;for(let n of e)t=t.add(n);return t}let tI=new ea(B);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ee(t)?"-0":t}}function tx(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this._=void 0}}function tD(e,t){return e instanceof tM?eB(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tN extends tA{}class tk extends tA{constructor(e){super(),this.elements=e}}function tR(e,t){let n=tU(t);for(let t of e.elements)n.some(e=>eR(e,t))||n.push(t);return{arrayValue:{values:n}}}class tO extends tA{constructor(e){super(),this.elements=e}}function tL(e,t){let n=tU(t);for(let t of e.elements)n=n.filter(e=>!eR(e,t));return{arrayValue:{values:n}}}class tM extends tA{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function tP(e){return ep(e.integerValue||e.doubleValue)}function tU(e){return eF(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tB{constructor(e,t){this.version=e,this.transformResults=t}}class tF{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tF}static exists(e){return new tF(void 0,e)}static updateTime(e){return new tF(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tV(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class t${}function tj(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tY(e.key,tF.none()):new tK(e.key,e.data,tF.none());{let n=e.data,r=ez.empty(),i=new ea(z.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new tz(e.key,r,new eu(i.toArray()),tF.none())}}function tq(e,t,n,r){return e instanceof tK?function(e,t,n,r){if(!tV(e.precondition,t))return n;let i=e.value.clone(),s=tQ(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof tz?function(e,t,n,r){if(!tV(e.precondition,t))return n;let i=tQ(e.fieldTransforms,r,t),s=t.data;return(s.setAll(tG(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tV(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tH(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&F(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tk&&r instanceof tk||n instanceof tO&&r instanceof tO?F(n.elements,r.elements,eR):n instanceof tM&&r instanceof tM?eR(n.Ie,r.Ie):n instanceof tN&&r instanceof tN)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tK extends t${constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tz extends t${constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tG(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function tW(e,t,n){var r;let i=new Map;e.length===n.length||C();for(let s=0;s<n.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(r=n[s],a instanceof tk?tR(a,l):a instanceof tO?tL(a,l):r))}return i}function tQ(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tN?function(e,t){let n={fields:{[ey]:{stringValue:em},[ew]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eE(t)&&(t=eb(t)),t&&(n.fields[ev]=t),{mapValue:n}}(t,s):e instanceof tk?tR(e,s):e instanceof tO?tL(e,s):function(e,t){let n=tD(e,t),r=tP(n)+tP(e.Ie);return eB(n)&&eB(e.Ie)?tx(r):tS(e.serializer,r)}(e,s))}return r}class tY extends t${constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tX extends t${constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tJ{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof tK?function(e,t,n){let r=e.value.clone(),i=tW(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof tz?function(e,t,n){if(!tV(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=tW(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(tG(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tq(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tq(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tb();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields),a=tj(s,o=t.has(r.key)?null:o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument($.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tC())}isEqual(e){return this.batchId===e.batchId&&F(this.mutations,e.mutations,(e,t)=>tH(e,t))&&F(this.baseMutations,e.baseMutations,(e,t)=>tH(e,t))}}class tZ{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||C();let r=t_,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new tZ(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,t){this.count=e,this.unchangedNames=t}}function t2(e){if(void 0===e)return b("GRPC error has no .code"),I.UNKNOWN;switch(e){case r.OK:return I.OK;case r.CANCELLED:return I.CANCELLED;case r.UNKNOWN:return I.UNKNOWN;case r.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case r.INTERNAL:return I.INTERNAL;case r.UNAVAILABLE:return I.UNAVAILABLE;case r.UNAUTHENTICATED:return I.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case r.NOT_FOUND:return I.NOT_FOUND;case r.ALREADY_EXISTS:return I.ALREADY_EXISTS;case r.PERMISSION_DENIED:return I.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case r.ABORTED:return I.ABORTED;case r.OUT_OF_RANGE:return I.OUT_OF_RANGE;case r.UNIMPLEMENTED:return I.UNIMPLEMENTED;case r.DATA_LOSS:return I.DATA_LOSS;default:return C()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t6=new c.Integer([0xffffffff,0xffffffff],0);function t5(e){let t=(new TextEncoder).encode(e),n=new c.Md5;return n.update(t),new Uint8Array(n.digest())}function t3(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new c.Integer([n,r],0),new c.Integer([i,s],0)]}class t8{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new t4(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new t4(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new t4(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=(0,c.Integer).fromNumber(this.Ee)}Ae(e,t,n){let r=e.add(t.multiply((0,c.Integer).fromNumber(n)));return 1===r.compare(t6)&&(r=new c.Integer([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;let[t,n]=t3(t5(e));for(let e=0;e<this.hashCount;e++){let r=this.Ae(t,n,e);if(!this.Re(r))return!1}return!0}static create(e,t,n){let r=new t8(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Ee)return;let[t,n]=t3(t5(e));for(let e=0;e<this.hashCount;e++){let r=this.Ae(t,n,e);this.Ve(r)}}Ve(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class t4 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t7{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,t9.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new t7($.min(),r,new ei(B),ty,tC())}}class t9{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new t9(n,t,tC(),tC(),tC())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t,n,r){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=r}}class nt{constructor(e,t){this.targetId=e,this.ge=t}}class nn{constructor(e,t,n=ec.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class nr{constructor(){this.pe=0,this.ye=no(),this.we=ec.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=tC(),t=tC(),n=tC();return this.ye.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:C()}}),new t9(this.we,this.Se,e,t,n)}Me(){this.be=!1,this.ye=no()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,this.pe>=0||C()}Le(){this.be=!0,this.Se=!0}}class ni{constructor(e){this.ke=e,this.qe=new Map,this.Qe=ty,this.$e=ns(),this.Ke=ns(),this.Ue=new ei(B)}We(e){for(let t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(let t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{let n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:C()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((e,n)=>{this.Je(n)&&t(n)})}Ze(e){let t=e.targetId,n=e.ge.count,r=this.Xe(t);if(r){let i=r.target;if(ts(i)){if(0===n){let e=new G(i.path);this.ze(t,e,eG.newNoDocument(e,$.min()))}else 1===n||C()}else{let r=this.et(t);if(r!==n){let n=this.tt(e),i=n?this.nt(n,e,r):1;0!==i&&(this.Ye(t),this.Ue=this.Ue.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}tt(e){let t,n;let r=e.ge.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=r;try{t=eg(i).toUint8Array()}catch(e){if(e instanceof eh)return _("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new t8(t,s,o)}catch(e){return _(e instanceof t4?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ee?null:n}nt(e,t,n){return 2*(t.ge.count!==n-this.st(e,t.targetId))}st(e,t){let n=this.ke.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.ze(t,n,null),r++)}),r}ot(e){let t=new Map;this.qe.forEach((n,r)=>{let i=this.Xe(r);if(i){if(n.current&&ts(i.target)){let t=new G(i.target.path);this._t(t).has(r)||this.ut(r,t)||this.ze(r,t,eG.newNoDocument(t,e))}n.ve&&(t.set(r,n.Fe()),n.Me())}});let n=tC();this.Ke.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Qe.forEach((t,n)=>n.setReadTime(e));let r=new t7(e,t,this.Ue,this.Qe,n);return this.Qe=ty,this.$e=ns(),this.Ke=ns(),this.Ue=new ei(B),r}Ge(e,t){if(!this.Je(e))return;let n=2*!!this.ut(e,t.key);this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;let r=this.He(e);this.ut(e,t)?r.xe(t,1):r.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){let t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new nr,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new ea(B),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new ea(B),this.$e=this.$e.insert(e,t)),t}Je(e){let t=null!==this.Xe(e);return t||E("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){let t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new nr),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ns(){return new ei(G.comparator)}function no(){return new ei(G.comparator)}let na={asc:"ASCENDING",desc:"DESCENDING"},nl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nu={and:"AND",or:"OR"};class nh{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nc(e,t){return e.useProto3Json||null==t?t:{value:t}}function nf(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nd(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function np(e){return e||C(),$.fromTimestamp(function(e){let t=ed(e);return new V(t.seconds,t.nanos)}(e))}function ng(e,t){return nm(e,t).canonicalString()}function nm(e,t){let n=new H(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function ny(e){let t=H.fromString(e);return nS(t)||C(),t}function nv(e,t){return ng(e.databaseId,t.path)}function nw(e,t){let n=ny(t);if(n.get(1)!==e.databaseId.projectId)throw new S(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new G(n_(n))}function nE(e,t){return ng(e.databaseId,t)}function nb(e){return new H(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function n_(e){return e.length>4&&"documents"===e.get(4)||C(),e.popFirst(5)}function nT(e,t,n){return{name:nv(e,t),fields:n.value.mapValue.fields}}function nC(e){return{fieldPath:e.canonicalString()}}function nI(e){return z.fromServerFormat(e.fieldPath)}function nS(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,t,n,r,i=$.min(),s=$.min(),o=ec.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new nx(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nx(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nx(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nx(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.Tt=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(+!!e.booleanValue);else if("integerValue"in e)this.ft(t,15),t.gt(ep(e.integerValue));else if("doubleValue"in e){let n=ep(e.doubleValue);isNaN(n)?this.ft(t,13):(this.ft(t,15),ee(n)?t.gt(0):t.gt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ft(t,20),"string"==typeof n&&(n=ed(n)),t.yt(`${n.seconds||""}`),t.gt(n.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(eg(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ft(t,45),t.gt(n.latitude||0),t.gt(n.longitude||0)}else"mapValue"in e?eK(e)?this.ft(t,Number.MAX_SAFE_INTEGER):eq(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):C()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){let n=e.fields||{};for(let e of(this.ft(t,55),Object.keys(n)))this.wt(e,t),this.Rt(n[e],t)}vt(e,t){var n,r;let i=e.fields||{};this.ft(t,53);let s=(null===(r=null===(n=i[eN].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.ft(t,15),t.gt(ep(s)),this.wt(eN,t),this.Rt(i[eN],t)}Ft(e,t){let n=e.values||[];for(let e of(this.ft(t,50),n))this.Rt(e,t)}Dt(e,t){this.ft(t,37),G.fromName(e).path.forEach(e=>{this.ft(t,60),this.Mt(e,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}nD.xt=new nD;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this.Tn=new nk}addToCollectionParentIndex(e,t){return this.Tn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(W.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(W.min())}updateCollectionGroup(e,t,n){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class nk{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ea(H.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ea(H.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nR={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nO{static withCacheSize(e){return new nO(e,nO.DEFAULT_COLLECTION_PERCENTILE,nO.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nO.DEFAULT_COLLECTION_PERCENTILE=10,nO.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nO.DEFAULT=new nO(0x2800000,nO.DEFAULT_COLLECTION_PERCENTILE,nO.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nO.DISABLED=new nO(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new nL(0)}static Un(){return new nL(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nM="LruGarbageCollector";function nP([e,t],[n,r]){let i=B(e,n);return 0===i?B(t,r):i}class nU{constructor(e){this.Hn=e,this.buffer=new ea(nP),this.Jn=0}Yn(){return++this.Jn}Zn(e){let t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>nP(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nB{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){E(nM,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){J(e)?E(nM,"Ignoring IndexedDB error during garbage collection: ",e):await Y(e)}await this.er(3e5)})}}class nF{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return X.resolve(Z.ae);let n=new nU(t);return this.tr.forEachTarget(e,e=>n.Zn(e.sequenceNumber)).next(()=>this.tr.rr(e,e=>n.Zn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(nR)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nR):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,r,i,s,o,a,l;let h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(E("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),w()<=u.LogLevel.DEBUG&&E("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-h}ms
	Determined least recently used ${r} in `+(o-s)+"ms\n"+`	Removed ${i} targets in `+(a-o)+"ms\n"+`	Removed ${e} documents in `+(l-a)+"ms\n"+`Total Duration: ${l-h}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(){this.changes=new tm(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eG.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?X.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n${constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tq(n.mutation,e,eu.empty(),V.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tC()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tC()){let r=tb();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tw();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tb();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tC()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=ty,s=tb(),o=tb();return t.forEach((e,t)=>{let o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof tz)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),tq(o.mutation,t,o.mutation.getFieldMask(),V.now())):s.set(t.key,eu.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new n$(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){let n=tb(),r=new ei((e,t)=>e-t),i=tC();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=n.get(e)||eu.empty();o=i.applyToLocalView(s,o),n.set(e,o);let a=(r.get(i.batchId)||tC()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{let s=[],o=r.getReverseIterator();for(;o.hasNext();){let r=o.getNext(),a=r.key,l=r.value,u=tb();l.forEach(e=>{if(!i.has(e)){let r=tj(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return X.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return G.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):X.resolve(tb()),o=-1,a=i;return s.next(t=>X.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?X.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,tC())).next(e=>({batchId:o,changes:tE(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(e=>{let t=tw();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=tw();return this.indexManager.getCollectionParents(e,i).next(o=>X.forEach(o,o=>{let a=new to(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,eG.newInvalidDocument(r)))});let n=tw();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&tq(s.mutation,r,eu.empty(),V.now()),tp(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return X.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:t.id,version:t.version,createTime:np(t.createTime)}),X.resolve()}getNamedQuery(e,t){return X.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=ny(e);return 4===t.length?H.emptyPath():n_(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){1===s||C();let e=i.from[0];e.allDescendants?o=e.collectionId:r=r.child(e.collectionId)}let a=[];i.where&&(a=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nI(e.unaryFilter.field);return eZ.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nI(e.unaryFilter.field);return eZ.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nI(e.unaryFilter.field);return eZ.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nI(e.unaryFilter.field);return eZ.create(i,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(t):void 0!==t.fieldFilter?eZ.create(nI(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e0.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return C()}}(t.compositeFilter.op)):C()}(e);return n instanceof e0&&e2(t=n)&&e1(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new eX(nI(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new eW(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new eW(e.values||[],t)}(i.endAt)),new to(r,o,l,a,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?th(t,t.limit,"L"):t}(t.bundledQuery),readTime:np(t.readTime)}),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(){this.overlays=new ei(G.comparator),this.Rr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tb();return X.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Et(e,t,r)}),X.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Rr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Rr.delete(n)),X.resolve()}getOverlaysForCollection(e,t,n){let r=tb(),i=t.length+1,s=new G(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return X.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ei((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tb(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=tb(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return X.resolve(o)}Et(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new t0(t,n));let i=this.Rr.get(t);void 0===i&&(i=tC(),this.Rr.set(t,i)),this.Rr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(){this.sessionToken=ec.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz{constructor(){this.Vr=new ea(nG.mr),this.gr=new ea(nG.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){let n=new nG(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.wr(new nG(e,t))}Sr(e,t){e.forEach(e=>this.removeReference(e,t))}br(e){let t=new G(new H([])),n=new nG(t,e),r=new nG(t,e+1),i=[];return this.gr.forEachInRange([n,r],e=>{this.wr(e),i.push(e.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){let t=new G(new H([])),n=new nG(t,e),r=new nG(t,e+1),i=tC();return this.gr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new nG(e,0),n=this.Vr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nG{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return G.comparator(e.key,t.key)||B(e.Cr,t.Cr)}static pr(e,t){return B(e.Cr,t.Cr)||G.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nW{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new ea(nG.mr)}checkEmpty(e){return X.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tJ(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Mr=this.Mr.add(new nG(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return X.resolve(s)}lookupMutationBatch(e,t){return X.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Nr(t+1),r=n<0?0:n;return X.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nG(t,0),r=new nG(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,r],e=>{let t=this.Or(e.Cr);i.push(t)}),X.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ea(B);return t.forEach(e=>{let t=new nG(e,0),r=new nG(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,r],e=>{n=n.add(e.Cr)})}),X.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;G.isDocumentKey(i)||(i=i.child(""));let s=new nG(new G(i),0),o=new ea(B);return this.Mr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Cr)),!0)},s),X.resolve(this.Br(o))}Br(e){let t=[];return e.forEach(e=>{let n=this.Or(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Lr(t.batchId,"removed")||C(),this.mutationQueue.shift();let n=this.Mr;return X.forEach(t.mutations,r=>{let i=new nG(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Mr=n})}qn(e){}containsKey(e,t){let n=new nG(t,0),r=this.Mr.firstAfterOrEqual(n);return X.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){let t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nQ{constructor(e){this.kr=e,this.docs=new ei(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return X.resolve(n?n.document.mutableCopy():eG.newInvalidDocument(t))}getEntries(e,t){let n=ty;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eG.newInvalidDocument(e))}),X.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ty,s=t.path,o=new G(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=G.comparator(e.documentKey,t.documentKey))?n:B(e.largestBatchId,t.largestBatchId)}(new W(o.readTime,o.key,-1),n)||(r.has(o.key)||tp(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return X.resolve(i)}getAllFromCollectionGroup(e,t,n,r){C()}qr(e,t){return X.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nY(this)}getSize(e){return X.resolve(this.size)}}class nY extends nV{constructor(e){super(),this.Ir=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(n)}),X.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{constructor(e){this.persistence=e,this.Qr=new tm(e=>tr(e),ti),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.$r=0,this.Kr=new nz,this.targetCount=0,this.Ur=nL.Kn()}forEachTarget(e,t){return this.Qr.forEach((e,n)=>t(n)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),X.resolve()}zn(e){this.Qr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ur=new nL(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.zn(t),X.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Qr.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),X.waitFor(i).next(()=>r)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){let n=this.Qr.get(t)||null;return X.resolve(n)}addMatchingKeys(e,t,n){return this.Kr.yr(t,n),X.resolve()}removeMatchingKeys(e,t,n){this.Kr.Sr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),X.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),X.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Kr.vr(t);return X.resolve(n)}containsKey(e,t){return X.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Z(0),this.zr=!1,this.zr=!0,this.jr=new nK,this.referenceDelegate=e(this),this.Hr=new nX(this),this.indexManager=new nN,this.remoteDocumentCache=new nQ(e=>this.referenceDelegate.Jr(e)),this.serializer=new nA(t),this.Yr=new nq(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nH,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new nW(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){E("MemoryPersistence","Starting transaction:",e);let r=new nZ(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next(e=>this.referenceDelegate.Xr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}ei(e,t){return X.or(Object.values(this.Wr).map(n=>()=>n.containsKey(e,t)))}}class nZ extends Q{constructor(e){super(),this.currentSequenceNumber=e}}class n0{constructor(e){this.persistence=e,this.ti=new nz,this.ni=null}static ri(e){return new n0(e)}get ii(){if(this.ni)return this.ni;throw C()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),X.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),X.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(e=>this.ii.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ii.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.ii,n=>{let r=G.fromPath(n);return this.si(e,r).next(e=>{e||t.removeEntry(r,$.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return X.or([()=>X.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class n1{constructor(e,t){this.persistence=e,this.oi=new tm(e=>(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new nF(this,t)}static ri(e,t){return new n1(e,t)}Zr(){}Xr(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){let t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}sr(e){let t=0;return this.rr(e,e=>{t++}).next(()=>t)}rr(e,t){return X.forEach(this.oi,(n,r)=>this.ar(e,n,r).next(e=>e?X.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(e,r=>this.ar(e,r,t).next(e=>{e||(n++,i.removeEntry(r,$.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),X.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),X.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(ek(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=eb(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return eg(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,en(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw C()}}(e.data.value)),t}ar(e,t,n){return X.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.oi.get(t);return X.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=r}static Yi(e,t){let n=tC(),r=tC();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new n2(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=(0,h.isSafari)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,h.getUA)())>0?6:4}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.rs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ss(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new n6;return this._s(e,t,n).next(r=>{if(i.result=r,this.Xi)return this.us(e,t,n,r.size)})}).next(()=>i.result)}us(e,t,n,r){return n.documentReadCount<this.es?(w()<=u.LogLevel.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",td(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),X.resolve()):(w()<=u.LogLevel.DEBUG&&E("QueryEngine","Query:",td(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(w()<=u.LogLevel.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",td(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tu(t))):X.resolve())}rs(e,t){if(ta(t))return X.resolve(null);let n=tu(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=tu(t=th(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=tC(...r);return this.ns.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.cs(t,r);return this.ls(t,s,i,n.readTime)?this.rs(e,th(t,null,"F")):this.hs(e,s,t,n)}))})))}ss(e,t,n,r){return ta(t)||r.isEqual($.min())?X.resolve(null):this.ns.getDocuments(e,n).next(i=>{let s=this.cs(t,i);return this.ls(t,s,n,r)?X.resolve(null):(w()<=u.LogLevel.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),td(t)),this.hs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new W($.fromTimestamp(1e9===r?new V(n+1,0):new V(n,r)),G.empty(),-1)}(r,0)).next(e=>e))})}cs(e,t){let n=new ea(tg(e));return t.forEach((t,r)=>{tp(e,r)&&(n=n.add(r))}),n}ls(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(e,t,n){return w()<=u.LogLevel.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",td(t)),this.ns.getDocumentsMatchingQuery(e,t,W.min(),n)}hs(e,t,n,r){return this.ns.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n3="LocalStore";class n8{constructor(e,t,n,r){this.persistence=e,this.Ps=t,this.serializer=r,this.Ts=new ei(B),this.Is=new tm(e=>tr(e),ti),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nj(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}async function n4(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],o=tC();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(n,o).next(e=>({Rs:e,removedBatchIds:i,addedBatchIds:s}))})})}function n7(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}async function n9(e,t,n){let r=e.Ts.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!J(e))throw e;E(n3,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Ts=e.Ts.remove(t),e.Is.delete(r.target)}function re(e,t,n){let r=$.min(),i=tC();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.Is.get(n);return void 0!==r?X.resolve(e.Ts.get(r)):e.Hr.getTargetData(t,n)})(e,s,tu(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Hr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ps.getDocumentsMatchingQuery(s,t,n?r:$.min(),n?i:tC())).next(n=>{var r,s,o;let a;return r=e,s=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),o=n,a=r.Es.get(s)||$.min(),o.forEach((e,t)=>{t.readTime.compareTo(a)>0&&(a=t.readTime)}),r.Es.set(s,a),{documents:n,gs:i}}))}class rt{constructor(){this.activeTargetIds=tI}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class rn{constructor(){this.ho=new rt,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new rt,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri="ConnectivityMonitor";class rs{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){for(let e of(E(ri,"Network connectivity changed: AVAILABLE"),this.Vo))e(0)}Ro(){for(let e of(E(ri,"Network connectivity changed: UNAVAILABLE"),this.Vo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro=null;function ra(){return null===ro?ro=0x10000000+Math.round(0x80000000*Math.random()):ro++,"0x"+ro.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl="RestConnection",ru={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rh{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo=this.databaseId.database===eC?`project_id=${n}`:`project_id=${n}&database_id=${r}`}So(e,t,n,r,i){let s=ra(),o=this.bo(e,t.toUriEncodedString());E(rl,`Sending RPC '${e}' ${s}:`,o,n);let a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,r,i),this.vo(e,o,a,n).then(t=>(E(rl,`Received RPC '${e}' ${s}: `,t),t),t=>{throw _(rl,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}Co(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+y,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}bo(e,t){let n=ru[e];return`${this.po}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rf="WebChannelConnection";class rd extends rh{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){let i=ra();return new Promise((s,o)=>{let a=new f.XhrIo;a.setWithCredentials(!0),a.listenOnce(f.EventType.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case f.ErrorCode.NO_ERROR:let t=a.getResponseJson();E(rf,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case f.ErrorCode.TIMEOUT:E(rf,`RPC '${e}' ${i} timed out`),o(new S(I.DEADLINE_EXCEEDED,"Request time out"));break;case f.ErrorCode.HTTP_ERROR:let n=a.getStatus();if(E(rf,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(t.status);o(new S(e,t.message))}else o(new S(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new S(I.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{E(rf,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);E(rf,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)})}Wo(e,t,n){let i=ra(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=(0,f.createWebChannelTransport)(),a=(0,f.getStatEventTarget)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");E(rf,`Creating RPC '${e}' stream ${i}: ${h}`,l);let c=o.createWebChannel(h,l),d=!1,p=!1,g=new rc({Fo:t=>{p?E(rf,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(E(rf,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),E(rf,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},Mo:()=>c.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(c,f.WebChannel.EventType.OPEN,()=>{p||(E(rf,`RPC '${e}' stream ${i} transport opened.`),g.Qo())}),m(c,f.WebChannel.EventType.CLOSE,()=>{p||(p=!0,E(rf,`RPC '${e}' stream ${i} transport closed`),g.Ko())}),m(c,f.WebChannel.EventType.ERROR,t=>{p||(p=!0,_(rf,`RPC '${e}' stream ${i} transport errored:`,t),g.Ko(new S(I.UNAVAILABLE,"The operation could not be completed")))}),m(c,f.WebChannel.EventType.MESSAGE,t=>{var n;if(!p){let s=t.data[0];s||C();let o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){E(rf,`RPC '${e}' stream ${i} received error:`,o);let t=o.status,n=function(e){let t=r[e];if(void 0!==t)return t2(t)}(t),s=o.message;void 0===n&&(n=I.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),p=!0,g.Ko(new S(n,s)),c.close()}else E(rf,`RPC '${e}' stream ${i} received:`,s),g.Uo(s)}}),m(a,f.Event.STAT_EVENT,t=>{t.stat===f.Stat.PROXY?E(rf,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===f.Stat.NOPROXY&&E(rf,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.$o()},0),g}}function rp(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(e){return new nh(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();let t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,t-n);r>0&&E("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ry="PersistentStream";class rv{constructor(e,t,n,r,i,s,o,a){this.Ti=e,this.n_=n,this.r_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new rm(e,t)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(b(t.toString()),b("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;let e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.i_===t&&this.V_(e,n)},t=>{e(()=>{let e=new S(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)})})}V_(e,t){let n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(e=>{n(()=>this.m_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.__?this.g_(e):this.onNext(e))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return E(ry,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(E(ry,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rw extends rv{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:C(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||C(),ec.fromBase64String(i||"")):(void 0===i||i instanceof d||i instanceof Uint8Array||C(),ec.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new nn(s,o,a,l&&new S(void 0===l.code?I.UNKNOWN:t2(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nw(e,r.document.name),s=np(r.document.updateTime),o=r.document.createTime?np(r.document.createTime):$.min(),a=new ez({mapValue:{fields:r.document.fields}}),l=eG.newFoundDocument(i,s,o,a);n=new ne(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nw(e,r.document),s=r.readTime?np(r.readTime):$.min(),o=eG.newNoDocument(i,s);n=new ne([],r.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nw(e,r.document);n=new ne([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return C();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new t1(r,i);n=new nt(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return $.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?$.min():t.readTime?np(t.readTime):$.min()}(e);return this.listener.p_(t,n)}y_(e){let t={};t.database=nb(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=ts(r)?{documents:{documents:[nE(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=nE(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof eZ?function(e){if("=="===e.op){if(e$(e.value))return{unaryFilter:{field:nC(e.field),op:"IS_NAN"}};if(eV(e.value))return{unaryFilter:{field:nC(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(e$(e.value))return{unaryFilter:{field:nC(e.field),op:"IS_NOT_NAN"}};if(eV(e.value))return{unaryFilter:{field:nC(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nC(e.field),op:nl[e.op],value:e.value}}}(t):t instanceof e0?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:nu[t.op],filters:n}}}(t):C()}(e0.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:nC(e.field),direction:na[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=nc(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{ht:s,parent:i}}(e,r).ht}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nd(e,t.resumeToken);let r=nc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo($.min())>0){n.readTime=nf(e,t.snapshotVersion.toTimestamp());let r=nc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){let t={};t.database=nb(this.serializer),t.removeTarget=e,this.I_(t)}}class rE extends rv{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return e.streamToken||C(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&C(),this.listener.D_()}onNext(e){var t,n;e.streamToken||C(),this.lastStreamToken=e.streamToken,this.a_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||C(),t.map(e=>{let t;return(t=e.updateTime?np(e.updateTime):np(n)).isEqual($.min())&&(t=np(n)),new tB(t,e.transformResults||[])})):[]),i=np(e.commitTime);return this.listener.v_(i,r)}C_(){let e={};e.database=nb(this.serializer),this.I_(e)}b_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tK)r={update:nT(e,t.key,t.value)};else if(t instanceof tY)r={delete:nv(e,t.key)};else if(t instanceof tz)r={update:nT(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tX))return C();r={verify:nv(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tN)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tk)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tO)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tM)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw C()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nf(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:C()),r})(this.serializer,e))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{}class r_ extends rb{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new S(I.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,nm(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(I.UNKNOWN,e.toString())})}Co(e,t,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,nm(t,n),r,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(I.UNKNOWN,e.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class rT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(b(t),this.N_=!1):E("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rC="RemoteStore";class rI{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(e=>{n.enqueueAndForget(async()=>{rL(this)&&(E(rC,"Restarting streams for network reachability change."),await async function(e){e.W_.add(4),await rx(e),e.j_.set("Unknown"),e.W_.delete(4),await rS(e)}(this))})}),this.j_=new rT(n,r)}}async function rS(e){if(rL(e))for(let t of e.G_)await t(!0)}async function rx(e){for(let t of e.G_)await t(!1)}function rA(e,t){e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),rO(e)?rR(e):rY(e).c_()&&rN(e,t))}function rD(e,t){let n=rY(e);e.U_.delete(t),n.c_()&&rk(e,t),0===e.U_.size&&(n.c_()?n.P_():rL(e)&&e.j_.set("Unknown"))}function rN(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}rY(e).y_(t)}function rk(e,t){e.H_.Ne(t),rY(e).w_(t)}function rR(e){e.H_=new ni({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.U_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),rY(e).start(),e.j_.B_()}function rO(e){return rL(e)&&!rY(e).u_()&&e.U_.size>0}function rL(e){return 0===e.W_.size}async function rM(e){e.j_.set("Online")}async function rP(e){e.U_.forEach((t,n)=>{rN(e,t)})}async function rU(e,t){e.H_=void 0,rO(e)?(e.j_.q_(t),rR(e)):e.j_.set("Unknown")}async function rB(e,t,n){if(e.j_.set("Online"),t instanceof nn&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.U_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.U_.delete(r),e.H_.removeTarget(r))}(e,t)}catch(n){E(rC,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rF(e,n)}else if(t instanceof ne?e.H_.We(t):t instanceof nt?e.H_.Ze(t):e.H_.je(t),!n.isEqual($.min()))try{let t=await n7(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.H_.ot(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.U_.get(r);i&&e.U_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.U_.get(t);if(!r)return;e.U_.set(t,r.withResumeToken(ec.EMPTY_BYTE_STRING,r.snapshotVersion)),rk(e,t);let i=new nx(r.target,t,n,r.sequenceNumber);rN(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){E(rC,"Failed to raise snapshot:",t),await rF(e,t)}}async function rF(e,t,n){if(!J(t))throw t;e.W_.add(1),await rx(e),e.j_.set("Offline"),n||(n=()=>n7(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E(rC,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await rS(e)})}function rV(e,t){return t().catch(n=>rF(e,n,t))}async function r$(e){var t;let n=rX(e),r=e.K_.length>0?e.K_[e.K_.length-1].batchId:-1;for(;rL(t=e)&&t.K_.length<10;)try{let t=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,r);if(null===t){0===e.K_.length&&n.P_();break}r=t.batchId,function(e,t){e.K_.push(t);let n=rX(e);n.c_()&&n.S_&&n.b_(t.mutations)}(e,t)}catch(t){await rF(e,t)}rj(e)&&rq(e)}function rj(e){return rL(e)&&!rX(e).u_()&&e.K_.length>0}function rq(e){rX(e).start()}async function rH(e){rX(e).C_()}async function rK(e){let t=rX(e);for(let n of e.K_)t.b_(n.mutations)}async function rz(e,t,n){let r=e.K_.shift(),i=tZ.from(r,t,n);await rV(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await r$(e)}async function rG(e,t){t&&rX(e).S_&&await async function(e,t){var n;if(function(e){switch(e){case I.OK:return C();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0;default:return C()}}(n=t.code)&&n!==I.ABORTED){let n=e.K_.shift();rX(e).h_(),await rV(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await r$(e)}}(e,t),rj(e)&&rq(e)}async function rW(e,t){e.asyncQueue.verifyOperationInProgress(),E(rC,"RemoteStore received new credentials");let n=rL(e);e.W_.add(3),await rx(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await rS(e)}async function rQ(e,t){t?(e.W_.delete(2),await rS(e)):t||(e.W_.add(2),await rx(e),e.j_.set("Unknown"))}function rY(e){var t,n,r;return e.J_||(e.J_=(t=e.datastore,n=e.asyncQueue,r={xo:rM.bind(null,e),No:rP.bind(null,e),Lo:rU.bind(null,e),p_:rB.bind(null,e)},t.M_(),new rw(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.G_.push(async t=>{t?(e.J_.h_(),rO(e)?rR(e):e.j_.set("Unknown")):(await e.J_.stop(),e.H_=void 0)})),e.J_}function rX(e){var t,n,r;return e.Y_||(e.Y_=(t=e.datastore,n=e.asyncQueue,r={xo:()=>Promise.resolve(),No:rH.bind(null,e),Lo:rG.bind(null,e),D_:rK.bind(null,e),v_:rz.bind(null,e)},t.M_(),new rE(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.G_.push(async t=>{t?(e.Y_.h_(),await r$(e)):(await e.Y_.stop(),e.K_.length>0&&(E(rC,`Stopping write stream with ${e.K_.length} pending writes`),e.K_=[]))})),e.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rJ{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new x,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new rJ(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rZ(e,t){if(b("AsyncQueue",`${t}: ${e}`),J(e))return new S(I.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{static emptySet(e){return new r0(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||G.comparator(t.key,n.key):(e,t)=>G.comparator(e.key,t.key),this.keyedMap=tw(),this.sortedSet=new ei(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof r0)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new r0;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.Z_=new ei(G.comparator)}track(e){let t=e.doc.key,n=this.Z_.get(t);n?0!==e.type&&3===n.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==n.type?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Z_=this.Z_.remove(t):1===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):C():this.Z_=this.Z_.insert(t,e)}X_(){let e=[];return this.Z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class r2{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new r2(e,t,r0.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class r5{constructor(){this.queries=r3(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=r3(),n.forEach((e,n)=>{for(let e of n.ta)e.onError(t)})}(this,new S(I.ABORTED,"Firestore shutting down"))}}function r3(){return new tm(e=>tf(e),tc)}async function r8(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.na()&&t.ra()&&(n=2):(i=new r6,n=+!t.ra());try{switch(n){case 0:i.ea=await e.onListen(r,!0);break;case 1:i.ea=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=rZ(n,`Initialization of query '${td(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.ta.push(t),t.sa(e.onlineState),i.ea&&t.oa(i.ea)&&ie(e)}async function r4(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.ta.indexOf(t);e>=0&&(i.ta.splice(e,1),0===i.ta.length?r=+!t.ra():!i.na()&&t.ra()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function r7(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.ta)e.oa(r)&&(n=!0);i.ea=r}}n&&ie(e)}function r9(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.ta)e.onError(n);e.queries.delete(t)}function ie(e){e.ia.forEach(e=>{e.next()})}(o=s||(s={}))._a="default",o.Cache="cache";class it{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new r2(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){return!(e.fromCache&&this.ra())||(!this.options.Ta||"Offline"===t)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;let t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=r2.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.key=e}}class ii{constructor(e){this.key=e}}class is{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=tC(),this.mutatedKeys=tC(),this.ya=tg(e),this.wa=new r0(this.ya)}get Sa(){return this.fa}ba(e,t){let n=t?t.Da:new r1,r=t?t.wa:this.wa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1,a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=tp(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),d=!1;u&&h?u.data.isEqual(h.data)?c!==f&&(n.track({type:3,doc:h}),d=!0):this.va(u,h)||(n.track({type:2,doc:h}),d=!0,(a&&this.ya(h,a)>0||l&&0>this.ya(h,l))&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),d=!0):u&&!h&&(n.track({type:1,doc:u}),d=!0,(a||l)&&(o=!0)),d&&(h?(s=s.add(h),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{wa:s,Da:n,ls:o,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;let s=e.Da.X_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return n(e)-n(t)})(e.type,t.type)||this.ya(e.doc,t.doc)),this.Ca(n),r=null!=r&&r;let o=t&&!r?this.Fa():[],a=0===this.pa.size&&this.current&&!r?1:0,l=a!==this.ga;return(this.ga=a,0!==s.length||l)?{snapshot:new r2(this.query,e.wa,i,s,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new r1,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=e.current)}Fa(){if(!this.current)return[];let e=this.pa;this.pa=tC(),this.wa.forEach(e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))});let t=[];return e.forEach(e=>{this.pa.has(e)||t.push(new ii(e))}),this.pa.forEach(n=>{e.has(n)||t.push(new ir(n))}),t}Oa(e){this.fa=e.gs,this.pa=tC();let t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return r2.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}let io="SyncEngine";class ia{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class il{constructor(e){this.key=e,this.Ba=!1}}class iu{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new tm(e=>tf(e),tc),this.qa=new Map,this.Qa=new Set,this.$a=new ei(G.comparator),this.Ka=new Map,this.Ua=new nz,this.Wa={},this.Ga=new Map,this.za=nL.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function ih(e,t,n=!0){let r;let i=iR(e),s=i.ka.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Na()):r=await id(i,t,n,!0),r}async function ic(e,t){let n=iR(e);await id(n,t,!0,!1)}async function id(e,t,n,r){var i,s;let o;let a=await (i=e.localStore,s=tu(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Hr.getTargetData(e,s).next(n=>n?(t=n,X.resolve(t)):i.Hr.allocateTargetId(e).next(n=>(t=new nx(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Hr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.Ts.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.Ts=i.Ts.insert(e.targetId,e),i.Is.set(s,e.targetId)),e})),l=a.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);return r&&(o=await ip(e,t,l,"current"===u,a.resumeToken)),e.isPrimaryClient&&n&&rA(e.remoteStore,a),o}async function ip(e,t,n,r,i){e.Ha=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ba(n);i.ls&&(i=await re(e.localStore,t.query,!1).then(({documents:e})=>t.view.ba(e,i)));let s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return ix(e,t.targetId,a.Ma),a.snapshot})(e,t,n,r);let s=await re(e.localStore,t,!0),o=new is(t,s.gs),a=o.ba(s.documents),l=t9.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);ix(e,n,u.Ma);let h=new ia(t,n,o);return e.ka.set(t,h),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),u.snapshot}async function ig(e,t,n){let r=e.ka.get(t),i=e.qa.get(r.targetId);if(i.length>1)return e.qa.set(r.targetId,i.filter(e=>!tc(e,t))),void e.ka.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await n9(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&rD(e.remoteStore,r.targetId),iI(e,r.targetId)}).catch(Y)):(iI(e,r.targetId),await n9(e.localStore,r.targetId,!0))}async function im(e,t){let n=e.ka.get(t),r=e.qa.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),rD(e.remoteStore,n.targetId))}async function iy(e,t,n){var r,i;let s=((r=e).remoteStore.remoteSyncer.applySuccessfulWrite=ib.bind(null,r),r.remoteStore.remoteSyncer.rejectFailedWrite=i_.bind(null,r),r);try{let e;let r=await function(e,t){let n,r;let i=V.now(),s=t.reduce((e,t)=>e.add(t.key),tC());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=ty,l=tC();return e.ds.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=tD(r.transform,e||null);null!=i&&(null===n&&(n=ez.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new tz(e.key,t,function e(t){let n=[];return en(t.fields,(t,r)=>{let i=new z([t]);if(ej(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new eu(n)}(t.value.mapValue),tF.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:tE(n)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),i=r.batchId,(e=s.Wa[s.currentUser.toKey()])||(e=new ei(B)),e=e.insert(i,n),s.Wa[s.currentUser.toKey()]=e,await iD(s,r.changes),await r$(s.remoteStore)}catch(t){let e=rZ(t,"Failed to persist write");n.reject(e)}}async function iv(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s,o,a;let l,u,h=e.ds.newChangeBuffer({trackRemovals:!0});r=e.Ts;let c=[];t.targetChanges.forEach((s,o)=>{var a;let l=r.get(o);if(!l)return;c.push(e.Hr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Hr.addMatchingKeys(i,s.addedDocuments,o)));let u=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?u=u.withResumeToken(ec.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,n)),r=r.insert(o,u),a=u,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&c.push(e.Hr.updateTargetData(i,u))});let f=ty,d=tC();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),c.push((s=i,o=h,a=t.documentUpdates,l=tC(),u=tC(),a.forEach(e=>l=l.add(e)),o.getEntries(s,l).next(e=>{let t=ty;return a.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(u=u.add(n)),r.isNoDocument()&&r.version.isEqual($.min())?(o.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(o.addEntry(r),t=t.insert(n,r)):E(n3,"Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Vs:t,fs:u}})).next(e=>{f=e.Vs,d=e.fs})),!n.isEqual($.min())){let t=e.Hr.getLastRemoteSnapshotVersion(i).next(t=>e.Hr.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(t)}return X.waitFor(c).next(()=>h.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,f,d)).next(()=>f)}).then(t=>(e.Ts=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Ka.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||C(),t.addedDocuments.size>0?r.Ba=!0:t.modifiedDocuments.size>0?r.Ba||C():t.removedDocuments.size>0&&(r.Ba||C(),r.Ba=!1))}),await iD(e,n,t)}catch(e){await Y(e)}}function iw(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ka.forEach((e,n)=>{let r=n.view.sa(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.ta)e.sa(t)&&(n=!0)}),n&&ie(r),i.length&&e.La.p_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function iE(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Ka.get(t),i=r&&r.key;if(i){let n=new ei(G.comparator);n=n.insert(i,eG.newNoDocument(i,$.min()));let r=tC().add(i),s=new t7($.min(),new Map,new ei(B),n,r);await iv(e,s),e.$a=e.$a.remove(i),e.Ka.delete(t),iA(e)}else await n9(e.localStore,t,!1).then(()=>iI(e,t,n)).catch(Y)}async function ib(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),o=X.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||C(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tC();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});iC(e,r,null),iT(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await iD(e,i)}catch(e){await Y(e)}}async function i_(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||C(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});iC(e,t,n),iT(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await iD(e,i)}catch(e){await Y(e)}}function iT(e,t){(e.Ga.get(t)||[]).forEach(e=>{e.resolve()}),e.Ga.delete(t)}function iC(e,t,n){let r=e.Wa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Wa[e.currentUser.toKey()]=r}}function iI(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.qa.get(t)))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ua.br(t).forEach(t=>{e.Ua.containsKey(t)||iS(e,t)})}function iS(e,t){e.Qa.delete(t.path.canonicalString());let n=e.$a.get(t);null!==n&&(rD(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ka.delete(n),iA(e))}function ix(e,t,n){for(let r of n)r instanceof ir?(e.Ua.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(E(io,"New document in limbo: "+n),e.Qa.add(r),iA(e))}(e,r)):r instanceof ii?(E(io,"Document no longer in limbo: "+r.key),e.Ua.removeReference(r.key,t),e.Ua.containsKey(r.key)||iS(e,r.key)):C()}function iA(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){let t=e.Qa.values().next().value;e.Qa.delete(t);let n=new G(H.fromString(t)),r=e.za.next();e.Ka.set(r,new il(n)),e.$a=e.$a.insert(n,r),rA(e.remoteStore,new nx(tu(new to(n.path)),r,"TargetPurposeLimboResolution",Z.ae))}}async function iD(e,t,n){let r=[],i=[],s=[];e.ka.isEmpty()||(e.ka.forEach((o,a)=>{s.push(e.Ha(a,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(a.targetId,r?"current":"not-current")}if(t){r.push(t);let e=n2.Yi(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.La.p_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>X.forEach(t,t=>X.forEach(t.Hi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>X.forEach(t.Ji,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!J(e))throw e;E(n3,"Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.Ts.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.Ts=e.Ts.insert(t,i)}}}(e.localStore,i))}async function iN(e,t){var n;if(!e.currentUser.isEqual(t)){E(io,"User change. New user:",t.toKey());let r=await n4(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ga.forEach(e=>{e.forEach(e=>{e.reject(new S(I.CANCELLED,n))})}),e.Ga.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await iD(e,r.Rs)}}function ik(e,t){let n=e.Ka.get(t);if(n&&n.Ba)return tC().add(n.key);{let n=tC(),r=e.qa.get(t);if(!r)return n;for(let t of r){let r=e.ka.get(t);n=n.unionWith(r.view.Sa)}return n}}function iR(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=iv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ik.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iE.bind(null,e),e.La.p_=r7.bind(null,e.eventManager),e.La.Ja=r9.bind(null,e.eventManager),e}class iO{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rg(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){var t,n;return t=this.persistence,n=new n5,new n8(t,n,e.initialUser,this.serializer)}Xa(e){return new nJ(n0.ri,this.serializer)}Za(e){return new rn}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}iO.provider={build:()=>new iO};class iL extends iO{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){return this.persistence.referenceDelegate instanceof n1||C(),new nB(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Xa(e){let t=void 0!==this.cacheSizeBytes?nO.withCacheSize(this.cacheSizeBytes):nO.DEFAULT;return new nJ(e=>n1.ri(e,t),this.serializer)}}class iM{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>iw(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=iN.bind(null,this.syncEngine),await rQ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new r5}createDatastore(e){var t;let n=rg(e.databaseInfo.databaseId),r=new rd(e.databaseInfo);return t=e.authCredentials,new r_(t,e.appCheckCredentials,r,n)}createRemoteStore(e){var t,n;return t=this.localStore,n=this.datastore,new rI(t,n,e.asyncQueue,e=>iw(this.syncEngine,e,0),rs.D()?new rs:new rr)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){let a=new iu(e,t,n,r,i,s);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){E(rC,"RemoteStore shutting down."),e.W_.add(5),await rx(e),e.z_.shutdown(),e.j_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}iM.provider={build:()=>new iM};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):b("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iU="FirestoreClient";class iB{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=m.UNAUTHENTICATED,this.clientId=U.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{E(iU,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(E(iU,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new x;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=rZ(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function iF(e,t){e.asyncQueue.verifyOperationInProgress(),E(iU,"Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await n4(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function iV(e,t){e.asyncQueue.verifyOperationInProgress();let n=await i$(e);E(iU,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>rW(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rW(t.remoteStore,n)),e._onlineComponents=t}async function i$(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){E(iU,"Using user provided OfflineComponentProvider");try{await iF(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;_("Error using user provided cache. Falling back to memory cache: "+t),await iF(e,new iO)}}else E(iU,"Using default OfflineComponentProvider"),await iF(e,new iL(void 0))}return e._offlineComponents}async function ij(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E(iU,"Using user provided OnlineComponentProvider"),await iV(e,e._uninitializedComponentsProvider._online)):(E(iU,"Using default OnlineComponentProvider"),await iV(e,new iM))),e._onlineComponents}async function iq(e){let t=await ij(e),n=t.eventManager;return n.onListen=ih.bind(null,t.syncEngine),n.onUnlisten=ig.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ic.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=im.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iH(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iK=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iz(e,t,n){if(!n)throw new S(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function iG(e){if(!G.isDocumentKey(e))throw new S(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function iW(e){if(G.isDocumentKey(e))throw new S(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function iQ(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":C()}function iY(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=iQ(e);throw new S(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iX="firestore.googleapis.com";class iJ{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new S(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iX,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new S(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iH(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iZ{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iJ({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new S(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iJ(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new D;switch(e.type){case"firstParty":return new L(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=iK.get(e);t&&(E("ComponentProvider","Removing Datastore"),iK.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new i0(this.firestore,e,this._query)}}class i1{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new i2(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new i1(this.firestore,e,this._key)}}class i2 extends i0{constructor(e,t,n){super(e,t,new to(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new i1(this.firestore,null,new G(e))}withConverter(e){return new i2(this.firestore,e,this._path)}}function i6(e,t,...n){if(e=(0,h.getModularInstance)(e),iz("collection","path",t),e instanceof iZ){let r=H.fromString(t,...n);return iW(r),new i2(e,null,r)}{if(!(e instanceof i1||e instanceof i2))throw new S(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(H.fromString(t,...n));return iW(r),new i2(e.firestore,null,r)}}function i5(e,t,...n){if(e=(0,h.getModularInstance)(e),1==arguments.length&&(t=U.newId()),iz("doc","path",t),e instanceof iZ){let r=H.fromString(t,...n);return iG(r),new i1(e,null,new G(r))}{if(!(e instanceof i1||e instanceof i2))throw new S(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(H.fromString(t,...n));return iG(r),new i1(e.firestore,e instanceof i2?e.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i3="AsyncQueue";class i8{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new rm(this,"async_queue_retry"),this.Su=()=>{let e=rp();e&&E(i3,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;let t=rp();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;let t=rp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});let t=new x;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!J(e))throw e;E(i3,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){let t=this.bu.then(()=>(this.pu=!0,e().catch(e=>{let t;throw this.gu=e,this.pu=!1,b("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.pu=!1,e))));return this.bu=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);let r=rJ.createAndSchedule(this,e,t,n,e=>this.Fu(e));return this.fu.push(r),r}Du(){this.gu&&C()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(let t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{for(let t of(this.fu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.fu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){let t=this.fu.indexOf(e);this.fu.splice(t,1)}}class i4 extends iZ{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new i8,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new i8(e),this._firestoreClient=void 0,await e}}}function i7(e,t){let n="object"==typeof e?e:(0,a.getApp)(),r=(0,a._getProvider)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||eC});if(!r._initialized){let e=(0,h.getDefaultEmulatorHostnameAndPort)("firestore");e&&function(e,t,n,r={}){var i;let s=(e=iY(e,iZ))._getSettings(),o=`${t}:${n}`;if(s.host!==iX&&s.host!==o&&_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=m.MOCK_USER;else{t=(0,h.createMockUserToken)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new S(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new m(s)}e._authCredentials=new N(new A(t,n))}}(r,...e)}return r}function i9(e){if(e._terminated)throw new S(I.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,i,s;let o=e._freezeSettings(),a=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",new eT(i,s,e._persistenceKey,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,iH(o.experimentalLongPollingOptions),o.useFetchStreams));e._componentsProvider||(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),e._firestoreClient=new iB(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this._byteString=e}static fromBase64String(e){try{return new se(ec.fromBase64String(e))}catch(e){throw new S(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new se(ec.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss=/^__.*__$/;class so{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new tz(e,this.data,this.fieldMask,t,this.fieldTransforms):new tK(e,this.data,t,this.fieldTransforms)}}class sa{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new tz(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class su{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.$u(e),r}Ku(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return sE(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(sl(this.Lu)&&ss.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class sh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||rg(e)}ju(e,t,n,r=!1){return new su({Lu:e,methodName:t,zu:n,path:z.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sc(e){let t=e._freezeSettings(),n=rg(e._databaseId);return new sh(e._databaseId,!!t.ignoreUndefinedProperties,n)}class sf extends sn{_toFieldTransform(e){if(2!==e.Lu)throw 1===e.Lu?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sf}}function sd(e,t){if(sg(e=(0,h.getModularInstance)(e)))return sm("Unsupported field value:",t,e),sp(e,t);if(e instanceof sn)return function(e,t){if(!sl(t.Lu))throw t.Wu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Wu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&4!==t.Lu)throw t.Wu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=sd(i,t.Uu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i;if(null===(e=(0,h.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!ee(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tx(r):tS(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=V.fromDate(e);return{timestampValue:nf(t.serializer,n)}}if(e instanceof V){let n=new V(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nf(t.serializer,n)}}if(e instanceof sr)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof se)return{bytesValue:nd(t.serializer,e._byteString)};if(e instanceof i1){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Wu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ng(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof si)return{mapValue:{fields:{[eS]:{stringValue:eD},[eN]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Wu("VectorValues must only contain numeric values.");return tS(t.serializer,e)})}}}}};throw t.Wu(`Unsupported field value: ${iQ(e)}`)}(e,t)}function sp(e,t){let n={};return er(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):en(e,(e,r)=>{let i=sd(r,t.qu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function sg(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof V||e instanceof sr||e instanceof se||e instanceof i1||e instanceof sn||e instanceof si)}function sm(e,t,n){if(!sg(n)||"object"!=typeof n||null===n||Object.getPrototypeOf(n)!==Object.prototype&&null!==Object.getPrototypeOf(n)){let r=iQ(n);throw"an object"===r?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}}function sy(e,t,n){if((t=(0,h.getModularInstance)(t))instanceof st)return t._internalPath;if("string"==typeof t)return sw(e,t);throw sE("Field path arguments must be of type string or ",e,!1,void 0,n)}let sv=RegExp("[~\\*/\\[\\]]");function sw(e,t,n){if(t.search(sv)>=0)throw sE(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new st(...t.split("."))._internalPath}catch(r){throw sE(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sE(e,t,n,r,i){let s=r&&!r.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new S(I.INVALID_ARGUMENT,a+e+l)}function sb(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new i1(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sC("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sT extends s_{data(){return super.data()}}function sC(e,t){return"string"==typeof t?sw(e,t):t instanceof st?t._internalPath:t._delegate._internalPath}class sI{convertValue(e,t="none"){switch(ek(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ep(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eg(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw C()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return en(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;return new si(null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[eN].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>ep(e.doubleValue)))}convertGeoPoint(e){return new sr(ep(e.latitude),ep(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=eb(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(e_(e));default:return null}}convertTimestamp(e){let t=ed(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=H.fromString(e);nS(n)||C();let r=new eI(n.get(1),n.get(3)),i=new G(n.popFirst(5));return r.isEqual(t)||b(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sx extends s_{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new sA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(sC("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class sA extends sx{data(e={}){return super.data(e)}}class sD{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new sS(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new sA(this._firestore,this._userDataWriter,n.key,n,new sS(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new sA(e._firestore,e._userDataWriter,n.doc.key,n.doc,new sS(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new sA(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sS(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(e){e=iY(e,i1);let t=iY(e.firestore,i4);return(function(e,t,n={}){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new iP({next:a=>{s.su(),t.enqueueAndForget(()=>r4(e,o));let l=a.docs.has(n);!l&&a.fromCache?i.reject(new S(I.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&r&&"server"===r.source?i.reject(new S(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new it(new to(n.path),s,{includeMetadataChanges:!0,Ta:!0});return r8(e,o)})(await iq(e),e.asyncQueue,t,n,r)),r.promise})(i9(t),e._key).then(n=>(function(e,t,n){let r=n.docs.get(t._key),i=new sk(e);return new sx(e,i,t._key,r,new sS(n.hasPendingWrites,n.fromCache),t.converter)})(t,e,n))}class sk extends sI{constructor(e){super(),this.firestore=e}convertBytes(e){return new se(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new i1(this.firestore,null,t)}}function sR(e){e=iY(e,i0);let t=iY(e.firestore,i4),n=i9(t),r=new sk(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new iP({next:n=>{s.su(),t.enqueueAndForget(()=>r4(e,o)),n.fromCache&&"server"===r.source?i.reject(new S(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new it(n,s,{includeMetadataChanges:!0,Ta:!0});return r8(e,o)})(await iq(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new sD(t,r,e,n)))}function sO(e,t,n,...r){e=iY(e,i1);let i=iY(e.firestore,i4),s=sc(i);return sM(i,[("string"==typeof(t=(0,h.getModularInstance)(t))||t instanceof st?function(e,t,n,r,i,s){let o=e.ju(1,t,n),a=[sy(t,r,n)],l=[i];if(s.length%2!=0)throw new S(I.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(sy(t,s[e])),l.push(s[e+1]);let u=[],c=ez.empty();for(let e=a.length-1;e>=0;--e)if(!sb(u,a[e])){let t=a[e],n=l[e];n=(0,h.getModularInstance)(n);let r=o.Ku(t);if(n instanceof sf)u.push(t);else{let e=sd(n,r);null!=e&&(u.push(t),c.set(t,e))}}return new sa(c,new eu(u),o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.ju(1,t,n);sm("Data must be an object, but it was:",i,r);let s=[],o=ez.empty();return en(r,(e,r)=>{let a=sw(t,e,n);r=(0,h.getModularInstance)(r);let l=i.Ku(a);if(r instanceof sf)s.push(a);else{let e=sd(r,l);null!=e&&(s.push(a),o.set(a,e))}}),new sa(o,new eu(s),i.fieldTransforms)}(s,"updateDoc",e._key,t)).toMutation(e._key,tF.exists(!0))])}function sL(e,t){var n;let r=iY(e.firestore,i4),i=i5(e),s=(n=e.converter)?n.toFirestore(t):t;return sM(r,[(function(e,t,n,r,i,s={}){let o,a;let l=e.ju(s.merge||s.mergeFields?2:0,t,n,i);sm("Data must be an object, but it was:",l,r);let u=sp(r,l);if(s.merge)o=new eu(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=sy(t,r,n);if(!l.contains(i))throw new S(I.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);sb(e,i)||e.push(i)}o=new eu(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new so(new ez(u),o,a)})(sc(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,tF.exists(!1))]).then(()=>i)}function sM(e,t){return function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>iy(await ij(e).then(e=>e.syncEngine),t,n)),n.promise}(i9(e),t)}new WeakMap,function(e=!0){y=a.SDK_VERSION,(0,a._registerComponent)(new(0,l.Component)("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new i4(new k(t.getProvider("auth-internal")),new P(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eI(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,a.registerVersion)(p,g,void 0),(0,a.registerVersion)(p,g,"esm2017")}()}),O("7xvHX",function(t,n){e(t.exports,"_registerComponent",()=>y),e(t.exports,"_getProvider",()=>v),e(t.exports,"_removeServiceInstance",()=>w),e(t.exports,"_isFirebaseServerApp",()=>E),e(t.exports,"registerVersion",()=>S),e(t.exports,"SDK_VERSION",()=>T),e(t.exports,"initializeApp",()=>C),e(t.exports,"getApp",()=>I);var r=R("eryG9"),i=R("5Z2ef"),s=R("gMVVg"),o=R("iItpQ");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let l="@firebase/app",u="0.11.1",h=new i.Logger("@firebase/app"),c="[DEFAULT]",f={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},d=new Map,p=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e){let t=e.name;if(g.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(g.set(t,e),d.values()))m(n,e);for(let t of p.values())m(t,e);return!0}function v(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function w(e,t,n=c){v(e,t).clearInstance(n)}function E(e){return null!=e&&void 0!==e.settings}let b=new s.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T="11.3.1";function C(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:c,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw b.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.getDefaultAppConfig)()),!n)throw b.create("no-options");let a=d.get(o);if(a){if((0,s.deepEqual)(n,a.options)&&(0,s.deepEqual)(i,a.config))return a;throw b.create("duplicate-app",{appName:o})}let l=new r.ComponentContainer(o);for(let e of g.values())l.addComponent(e);let u=new _(n,i,l);return d.set(o,u),u}function I(e=c){let t=d.get(e);if(!t&&e===c&&(0,s.getDefaultAppConfig)())return C();if(!t)throw b.create("no-app",{appName:e});return t}function S(e,t,n){var i;let s=null!==(i=f[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);let o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let e=[`Unable to register library "${s}" with version "${t}":`];o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),h.warn(e.join(" "));return}y(new r.Component(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}let x="firebase-heartbeat-store",A=null;function D(){return A||(A=(0,o.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(x)}catch(e){console.warn(e)}}}).catch(e=>{throw b.create("idb-open",{originalErrorMessage:e.message})})),A}async function N(e){try{let t=(await D()).transaction(x),n=await t.objectStore(x).get(O(e));return await t.done,n}catch(e){if(e instanceof s.FirebaseError)h.warn(e.message);else{let t=b.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}async function k(e,t){try{let n=(await D()).transaction(x,"readwrite"),r=n.objectStore(x);await r.put(t,O(e)),await n.done}catch(e){if(e instanceof s.FirebaseError)h.warn(e.message);else{let t=b.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function O(e){return`${e.name}!${e.options.appId}`}class L{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new P(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=M();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){h.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=M(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),U(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),U(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return h.warn(e),""}}}function M(){return new Date().toISOString().substring(0,10)}class P{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.isIndexedDBAvailable)()&&(0,s.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await N(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function U(e){return(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}y(new r.Component("platform-logger",e=>new a(e),"PRIVATE")),y(new r.Component("heartbeat",e=>new L(e),"PRIVATE")),S(l,u,""),S(l,u,"esm2017"),S("fire-js","")}),O("eryG9",function(t,n){e(t.exports,"Component",()=>i),e(t.exports,"ComponentContainer",()=>a);var r=R("gMVVg");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var n;let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e)===s?void 0:n,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}}),O("gMVVg",function(t,n){e(t.exports,"base64urlEncodeWithoutPadding",()=>u),e(t.exports,"base64Decode",()=>h),e(t.exports,"getDefaultEmulatorHostnameAndPort",()=>m),e(t.exports,"getDefaultAppConfig",()=>y),e(t.exports,"Deferred",()=>v),e(t.exports,"createMockUserToken",()=>w),e(t.exports,"getUA",()=>E),e(t.exports,"isBrowser",()=>b),e(t.exports,"isWebWorker",()=>_),e(t.exports,"isSafari",()=>T),e(t.exports,"isIndexedDBAvailable",()=>C),e(t.exports,"validateIndexedDBOpenable",()=>I),e(t.exports,"FirebaseError",()=>S),e(t.exports,"ErrorFactory",()=>x),e(t.exports,"deepEqual",()=>function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=t[s],o=n[s];if(N(r)&&N(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}),e(t.exports,"getModularInstance",()=>k);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var r=R("hPtJY");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},s=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[n++],o=((7&i)<<18|(63&s)<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{let s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,h=(3&i)<<4|o>>4,c=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(c=64)),r.push(n[u],n[h],n[c],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,l=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==l)throw new a;let u=i<<2|s>>4;if(r.push(u),64!==o){let e=s<<4&240|o>>2;if(r.push(e),64!==l){let e=o<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return o.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},c=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==D)return D;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,f=()=>{if(void 0===r||void 0===r.env)return;let e=void 0;if(e)return JSON.parse(e)},d=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&h(e[1]);return t&&JSON.parse(t)},p=()=>{try{return c()||f()||d()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{let t=g(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function b(){return"undefined"!=typeof window||_()}function _(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function T(){return!function(){var e;let t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(D.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function C(){try{return"object"==typeof indexedDB}catch(e){return!1}}function I(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var n,r;let i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?(n=o,r=i,n.replace(A,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`})):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new S(s,l,i)}}let A=/\{\$([^}]+)}/g;function N(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){return e&&e._delegate?e._delegate:e}}),O("hPtJY",function(e,t){var n,r,i,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u=[],h=!1,c=-1;function f(){h&&i&&(h=!1,i.length?u=i.concat(u):c=-1,u.length&&d())}function d(){if(!h){var e=l(f);h=!0;for(var t=u.length;t;){for(i=u,u=[];++c<t;)i&&i[c].run();c=-1,t=u.length}i=null,h=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||h||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}),O("5Z2ef",function(t,n){var r,i;e(t.exports,"LogLevel",()=>r),e(t.exports,"Logger",()=>h),e(t.exports,"setLogLevel",()=>c),e(t.exports,"setUserLogHandler",()=>f);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function c(e){s.forEach(t=>{t.setLogLevel(e)})}function f(e,t){for(let n of s){let i=null;t&&t.level&&(i=o[t.level]),null===e?n.userLogHandler=null:n.userLogHandler=(t,n,...s)=>{let o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}}),O("iItpQ",function(t,n){e(t.exports,"openDB",()=>i);var r=R("jMRra");function i(e,t,{blocked:n,upgrade:s,blocking:o,terminated:a}={}){let l=indexedDB.open(e,t),u=(0,r.w)(l);return s&&l.addEventListener("upgradeneeded",e=>{s((0,r.w)(l.result),e.oldVersion,e.newVersion,(0,r.w)(l.transaction),e)}),n&&l.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),u.then(e=>{a&&e.addEventListener("close",()=>a()),o&&e.addEventListener("versionchange",e=>o(e.oldVersion,e.newVersion,e))}).catch(()=>{}),u}let s=["get","getKey","getAll","getAllKeys","count"],o=["put","add","delete","clear"],a=new Map;function l(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(a.get(t))return a.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=o.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||s.includes(n)))return;let l=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return a.set(t,l),l}(0,r.r)(e=>({...e,get:(t,n,r)=>l(t,n)||e.get(t,n,r),has:(t,n)=>!!l(t,n)||e.has(t,n)}))}),O("jMRra",function(t,n){let r,i;e(t.exports,"w",()=>d),e(t.exports,"r",()=>f);let s=(e,t)=>t.some(t=>e instanceof t),o=new WeakMap,a=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,c={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return d(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){c=e(c)}function d(e){if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(d(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),h.set(t,e),t}(e);if(u.has(e))return u.get(e);let t=function(e){if("function"==typeof e)return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(p(this),t),d(o.get(this))}:function(...t){return d(e.apply(p(this),t))}:function(t,...n){let r=e.call(p(this),t,...n);return l.set(r,t.sort?t.sort():[t]),d(r)};return(e instanceof IDBTransaction&&function(e){if(a.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});a.set(e,t)}(e),s(e,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(e,c):e}(e);return t!==e&&(u.set(e,t),h.set(t,e)),t}let p=e=>h.get(e)}),O("cozvr",function(t,n){e(t.exports,"Integer",()=>r),e(t.exports,"Md5",()=>i);var r,i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==D?D:"undefined"!=typeof self?self:{},o={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+0xd76aa478&0xffffffff;o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[1]+0xe8c7b756&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[2]+0x242070db&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[3]+0xc1bdceee&0xffffffff,o=t+(s^(n=i+(o<<22&0xffffffff|o>>>10))&(i^s))+r[4]+0xf57c0faf&0xffffffff,o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[5]+0x4787c62a&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[6]+0xa8304613&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[7]+0xfd469501&0xffffffff,o=t+(s^(n=i+(o<<22&0xffffffff|o>>>10))&(i^s))+r[8]+0x698098d8&0xffffffff,o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[9]+0x8b44f7af&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[10]+0xffff5bb1&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[11]+0x895cd7be&0xffffffff,o=t+(s^(n=i+(o<<22&0xffffffff|o>>>10))&(i^s))+r[12]+0x6b901122&0xffffffff,o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[13]+0xfd987193&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[14]+0xa679438e&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[15]+0x49b40821&0xffffffff,n=i+(o<<22&0xffffffff|o>>>10),o=t+(i^s&(n^i))+r[1]+0xf61e2562&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[6]+0xc040b340&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[11]+0x265e5a51&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[0]+0xe9b6c7aa&0xffffffff,n=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(n^i))+r[5]+0xd62f105d&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[10]+0x2441453&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[15]+0xd8a1e681&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[4]+0xe7d3fbc8&0xffffffff,n=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(n^i))+r[9]+0x21e1cde6&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[14]+0xc33707d6&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[3]+0xf4d50d87&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[8]+0x455a14ed&0xffffffff,n=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(n^i))+r[13]+0xa9e3e905&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[2]+0xfcefa3f8&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[7]+0x676f02d9&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[12]+0x8d2a4c8a&0xffffffff,o=t+((n=i+(o<<20&0xffffffff|o>>>12))^i^s)+r[5]+0xfffa3942&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[8]+0x8771f681&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[11]+0x6d9d6122&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[14]+0xfde5380c&0xffffffff,o=t+((n=i+(o<<23&0xffffffff|o>>>9))^i^s)+r[1]+0xa4beea44&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[4]+0x4bdecfa9&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[7]+0xf6bb4b60&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[10]+0xbebfbc70&0xffffffff,o=t+((n=i+(o<<23&0xffffffff|o>>>9))^i^s)+r[13]+0x289b7ec6&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[0]+0xeaa127fa&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[3]+0xd4ef3085&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[6]+0x4881d05&0xffffffff,o=t+((n=i+(o<<23&0xffffffff|o>>>9))^i^s)+r[9]+0xd9d4d039&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[12]+0xe6db99e5&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[15]+0x1fa27cf8&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[2]+0xc4ac5665&0xffffffff,n=i+(o<<23&0xffffffff|o>>>9),o=t+(i^(n|~s))+r[0]+0xf4292244&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[7]+0x432aff97&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[14]+0xab9423a7&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[5]+0xfc93a039&0xffffffff,n=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(n|~s))+r[12]+0x655b59c3&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[3]+0x8f0ccc92&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[10]+0xffeff47d&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[1]+0x85845dd1&0xffffffff,n=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(n|~s))+r[8]+0x6fa87e4f&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[15]+0xfe2ce6e0&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[6]+0xa3014314&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[13]+0x4e0811a1&0xffffffff,n=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(n|~s))+r[4]+0xf7537e82&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[11]+0xbd3af235&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[2]+0x2ad7d2bb&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(o<<21&0xffffffff|o>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function n(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}})(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,n){void 0===n&&(n=e.length);for(var r=n-this.blockSize,i=this.B,s=this.h,o=0;o<n;){if(0==s)for(;o<=r;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<n;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,i),s=0;break}}else for(;o<n;)if(i[s++]=e[o++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=n},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var s,a={};function l(e){var t;return -128<=e&&128>e?(t=function(e){return new n([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(a,e)?a[e]:a[e]=t(e)):new n([0|e],0>e?-1:0)}function u(e){if(isNaN(e)||!isFinite(e))return h;if(0>e)return g(u(-e));for(var t=[],r=1,i=0;e>=r;i++)t[i]=e/r|0,r*=0x100000000;return new n(t,0)}var h=l(0),c=l(1),f=l(0x1000000);function d(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function p(e){return -1==e.h}function g(e){for(var t=e.g.length,r=[],i=0;i<t;i++)r[i]=~e.g[i];return new n(r,~e.h).add(c)}function m(e,t){return e.add(g(t))}function y(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function v(e,t){this.g=e,this.h=t}function w(e,t){if(d(t))throw Error("division by zero");if(d(e))return new v(h,h);if(p(e))return t=w(g(e),t),new v(g(t.g),g(t.h));if(p(t))return t=w(e,g(t)),new v(g(t.g),t.h);if(30<e.g.length){if(p(e)||p(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=t;0>=r.l(e);)n=E(n),r=E(r);var i=b(n,1),s=b(r,1);for(r=b(r,2),n=b(n,2);!d(r);){var o=s.add(r);0>=o.l(e)&&(i=i.add(n),s=o),r=b(r,1),n=b(n,1)}return t=m(e,i.j(t)),new v(i,t)}for(i=h;0<=e.l(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,r-48),o=(s=u(n)).j(t);p(o)||0<o.l(e);)n-=r,o=(s=u(n)).j(t);d(s)&&(s=c),i=i.add(s),e=m(e,o)}return new v(i,e)}function E(e){for(var t=e.g.length+1,r=[],i=0;i<t;i++)r[i]=e.i(i)<<1|e.i(i-1)>>>31;return new n(r,e.h)}function b(e,t){var r=t>>5;t%=32;for(var i=e.g.length-r,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+r)>>>t|e.i(o+r+1)<<32-t:e.i(o+r);return new n(s,e.h)}(s=n.prototype).m=function(){if(p(this))return-g(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:0x100000000+r)*t,t*=0x100000000}return e},s.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(d(this))return"0";if(p(this))return"-"+g(this).toString(e);for(var t=u(Math.pow(e,6)),n=this,r="";;){var i=w(n,t).g,s=((0<(n=m(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(d(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},s.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},s.l=function(e){return p(e=m(this,e))?-1:+!d(e)},s.abs=function(){return p(this)?g(this):this},s.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,r[s]=a<<16|o}return new n(r,-0x80000000&r[r.length-1]?-1:0)},s.j=function(e){if(d(this)||d(e))return h;if(p(this))return p(e)?g(this).j(g(e)):g(g(this).j(e));if(p(e))return g(this.j(g(e)));if(0>this.l(f)&&0>e.l(f))return u(this.m()*e.m());for(var t=this.g.length+e.g.length,r=[],i=0;i<2*t;i++)r[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var o=this.i(i)>>>16,a=65535&this.i(i),l=e.i(s)>>>16,c=65535&e.i(s);r[2*i+2*s]+=a*c,y(r,2*i+2*s),r[2*i+2*s+1]+=o*c,y(r,2*i+2*s+1),r[2*i+2*s+1]+=a*l,y(r,2*i+2*s+1),r[2*i+2*s+2]+=o*l,y(r,2*i+2*s+2)}for(i=0;i<t;i++)r[i]=r[2*i+1]<<16|r[2*i];for(i=t;i<2*t;i++)r[i]=0;return new n(r,0)},s.A=function(e){return w(this,e).h},s.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)&e.i(i);return new n(r,this.h&e.h)},s.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)|e.i(i);return new n(r,this.h|e.h)},s.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)^e.i(i);return new n(r,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,i=o.Md5=e,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.A,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=u,n.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return g(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=u(Math.pow(n,8)),i=h,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=u(Math.pow(n,o)),i=i.j(o).add(u(a))):i=(i=i.j(r)).add(u(a))}return i},r=o.Integer=n}).apply(void 0!==s?s:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}),O("4rHck",function(t,n){e(t.exports,"XhrIo",()=>r),e(t.exports,"WebChannel",()=>i),e(t.exports,"EventType",()=>s),e(t.exports,"ErrorCode",()=>o),e(t.exports,"Stat",()=>a),e(t.exports,"Event",()=>l),e(t.exports,"getStatEventTarget",()=>u),e(t.exports,"createWebChannelTransport",()=>h);var r,i,s,o,a,l,u,h,c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==D?D:"undefined"!=typeof self?self:{},f={};(function(){var e,t,n,d="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},p=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof c&&c];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var n=p;e=e.split(".");for(var r=0;r<e.length-1;r++){var i=e[r];if(!(i in n))break e;n=n[i]}(t=t(r=n[e=e[e.length-1]]))!=r&&null!=t&&d(n,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,n,r,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),n=0,r=!1,(i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var g=g||{},m=this||self;function y(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function v(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function w(e,t,n){return e.call.apply(e.bind,arguments)}function E(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return(b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:E).apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function C(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function I(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(y(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function S(e){return/^[\s\xa0]*$/.test(e)}function x(){var e=m.navigator;return e&&(e=e.userAgent)?e:""}function A(e){return A[" "](e),e}A[" "]=function(){};var D=-1!=x().indexOf("Gecko")&&(-1==x().toLowerCase().indexOf("webkit")||-1!=x().indexOf("Edge"))&&-1==x().indexOf("Trident")&&-1==x().indexOf("MSIE")&&-1==x().indexOf("Edge");function N(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function k(e){let t={};for(let n in e)t[n]=e[n];return t}let R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<R.length;t++)n=R[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}var L=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new M,e=>e.reset());class M{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let P,U=!1,B=new class{constructor(){this.h=this.g=null}add(e,t){let n=L.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},F=()=>{let e=m.Promise.resolve(void 0);P=()=>{e.then(V)}};var V=()=>{let e;for(var t;e=null,B.g&&(e=B.g,B.g=B.g.next,B.g||(B.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){m.setTimeout(()=>{throw e},0)}(e)}L.j(t),100>L.h&&(L.h++,t.next=L.g,L.g=t)}U=!1};function $(){this.s=this.s,this.C=this.C}function j(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},j.prototype.h=function(){this.defaultPrevented=!0};var q=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};m.addEventListener("test",e,t),m.removeEventListener("test",e,t)}catch(e){}return e}();function H(e,t){if(j.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(D){e:{try{A(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:K[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&H.aa.h.call(this)}}T(H,j);var K={2:"touch",3:"pen",4:"mouse"};H.prototype.h=function(){H.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),G=0;function W(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++G,this.da=this.fa=!1}function Q(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Y(e){this.src=e,this.g={},this.h=0}function X(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Q(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function J(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}Y.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=J(e,t,r,i);return -1<o?(t=e[o],n||(t.fa=!1)):((t=new W(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var Z="closure_lm_"+(1e6*Math.random()|0),ee={};function et(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=v(i)?!!i.capture:!!i,a=es(e);if(a||(e[Z]=a=new Y(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function e(t){return ei.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)q||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(er(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function en(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[z])X(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(er(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=es(t))?(X(n,e),0==n.h&&(n.src=null,t[Z]=null)):Q(e)}}}function er(e){return e in ee?ee[e]:ee[e]="on"+e}function ei(e,t){if(e.da)e=!0;else{t=new H(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&en(e),e=n.call(r,t)}return e}function es(e){return(e=e[Z])instanceof Y?e:null}var eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function ea(e){return"function"==typeof e?e:(e[eo]||(e[eo]=function(t){return e.handleEvent(t)}),e[eo])}function el(){$.call(this),this.i=new Y(this),this.M=this,this.F=null}function eu(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new j(t,e);else if(t instanceof j)t.target=t.target||e;else{var i=t;O(t=new j(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=eh(o,r,!0,t)&&i}if(i=eh(o=t.g=e,r,!0,t)&&i,i=eh(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=eh(o=t.g=n[s],r,!1,t)&&i}function eh(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&X(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}function ec(e,t,n){if("function"==typeof e)n&&(e=b(e,n));else if(e&&"function"==typeof e.handleEvent)e=b(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:m.setTimeout(e,t||0)}T(el,$),el.prototype[z]=!0,el.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else(i=v(i)?!!i.capture:!!i,r=ea(r),t&&t[z])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=J(o=t.g[n],r,i,s))&&(Q(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=es(t))&&(n=t.g[n.toString()],t=-1,n&&(t=J(n,r,i,s)),(r=-1<t?n[t]:null)&&en(r))}(this,e,t,n,r)},el.prototype.N=function(){if(el.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Q(n[r]);delete t.g[e],t.h--}}this.F=null},el.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},el.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class ef extends ${constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=ec(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ed(e){$.call(this),this.h=e,this.g={}}T(ed,$);var ep=[];function eg(e){N(e.g,function(e,t){this.g.hasOwnProperty(t)&&en(e)},e),e.g={}}ed.prototype.N=function(){ed.aa.N.call(this),eg(this)},ed.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var em=m.JSON.stringify,ey=m.JSON.parse,ev=class{stringify(e){return m.JSON.stringify(e,void 0)}parse(e){return m.JSON.parse(e,void 0)}};function ew(){}function eE(e){return e.h||(e.h=e.i())}function eb(){}ew.prototype.h=null;var e_={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eT(){j.call(this,"d")}function eC(){j.call(this,"c")}T(eT,j),T(eC,j);var eI={},eS=null;function ex(){return eS=eS||new el}function eA(e){j.call(this,eI.La,e)}function eD(e){let t=ex();eu(t,new eA(t))}function eN(e,t){j.call(this,eI.STAT_EVENT,e),this.stat=t}function ek(e){let t=ex();eu(t,new eN(t,e))}function eR(e,t){j.call(this,eI.Ma,e),this.size=t}function eO(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){e()},t)}function eL(){this.g=!0}function eM(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return em(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}eI.La="serverreachability",T(eA,j),eI.STAT_EVENT="statevent",T(eN,j),eI.Ma="timingevent",T(eR,j),eL.prototype.xa=function(){this.g=!1},eL.prototype.info=function(){};var eP={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eU={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eB(){}function eF(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ed(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eV}function eV(){this.i=null,this.g="",this.h=!1}T(eB,ew),eB.prototype.g=function(){return new XMLHttpRequest},eB.prototype.i=function(){return{}},t=new eB;var e$={},ej={};function eq(e,t,n){e.L=1,e.v=ti(e9(t)),e.m=n,e.P=!0,eH(e,null)}function eH(e,t){e.F=Date.now(),ez(e),e.A=e9(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),ty(n.i,"t",r),e.C=0,n=e.j.J,e.h=new eV,e.g=t6(e.j,n?t:null,!e.m),0<e.O&&(e.M=new ef(b(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ep[0]=i.toString()),i=ep);for(var s=0;s<i.length;s++){var o=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=ea(r),t&&t[z]?t.L(n,r,v(i)?!!i.capture:!!i,s):et(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=ea(r),t&&t[z]?t.K(n,r,v(i)?!!i.capture:!!i,s):et(t,n,r,!1,i,s)}(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?k(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),eD(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&"type"==c[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eK(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function ez(e){e.S=Date.now()+e.I,eG(e,e.I)}function eG(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eO(b(e.ba,e),t)}function eW(e){e.B&&(m.clearTimeout(e.B),e.B=null)}function eQ(e){0==e.j.G||e.J||tJ(e.j,e)}function eY(e){eW(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,eg(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eX(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||e2(n.h,e))){if(!e.K&&e2(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)tX(n),t$(n);else break e}tW(n),ek(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=eO(b(n.Za,n),6e3));if(1>=e1(n.h)&&n.ca){try{n.ca()}catch(e){}n.ca=void 0}}else t0(n,11)}else if((e.K||n.g==e)&&tX(n),!S(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(n.T=a[0],a=a[1],2==n.G){if("c"==a[0]){n.K=a[1],n.ia=a[2];let t=a[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));let i=a[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e6(s,s.h),s.h=null))}if(r.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,tr(r.I,r.D,e))}}if(n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),(r=n).qa=t2(r,r.J?r.ia:null,r.W),e.K){e5(r.h,e);var o=r.L;o&&(e.I=o),e.B&&(eW(e),ez(e)),r.g=e}else tG(r);0<n.i.length&&tq(n)}else"stop"!=a[0]&&"close"!=a[0]||t0(n,7)}else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?t0(n,7):tV(n):"noop"!=a[0]&&n.l&&n.l.ta(a),n.v=0)}}eD(4)}catch(e){}}eF.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tP(e)?t.j():this.Y(e)},eF.prototype.Y=function(e){try{if(e==this.g)e:{let c=tP(this.g);var t=this.g.Ba();let f=this.g.Z();if(!(3>c)&&(3!=c||this.g&&(this.h.h||this.g.oa()||tU(this.g)))){this.J||4!=c||7==t||(8==t||0>=f?eD(3):eD(2)),eW(this);var n=this.g.Z();this.X=n;t:if(eK(this)){var r=tU(this.g);e="";var i=r.length,s=4==tP(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eY(this),eQ(this);var o="";break t}this.h.i=new m.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,c,n),this.o){if(this.T&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var u=a;break t}}u=null}if(n=u)eM(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eX(this,n);else{this.o=!1,this.s=3,ek(12),eY(this),eQ(this);break e}}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;)if((e=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?ej:isNaN(n=Number(t.substring(n,r)))?e$:(r+=1)+n>t.length?ej:(t=t.slice(r,r+n),e.C=r+n,t)}(this,o))==ej){4==c&&(this.s=4,ek(14),n=!1),eM(this.i,this.l,null,"[Incomplete Response]");break}else if(e==e$){this.s=4,ek(15),eM(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}else eM(this.i,this.l,e,null),eX(this,e);if(eK(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=o.length||this.h.h||(this.s=1,ek(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),tQ(h),h.M=!0,ek(11))}}else eM(this.i,this.l,o,"[Invalid Chunked Response]"),eY(this),eQ(this)}else eM(this.i,this.l,o,null),eX(this,o);4==c&&eY(this),this.o&&!this.J&&(4==c?tJ(this.j,this):(this.o=!1,ez(this)))}else(function(e){let t={};e=(e.g&&2<=tP(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(S(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,ek(12)):(this.s=0,ek(13)),eY(this),eQ(this)}}}catch(e){}finally{}},eF.prototype.cancel=function(){this.J=!0,eY(this)},eF.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(eD(),ek(17)),eY(this),this.s=2,eQ(this)):eG(this,this.S-e)};var eJ=class{constructor(e,t){this.g=e,this.map=t}};function eZ(e){this.l=e||10,e=m.PerformanceNavigationTiming?0<(e=m.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function e0(e){return!!e.h||!!e.g&&e.g.size>=e.j}function e1(e){return e.h?1:e.g?e.g.size:0}function e2(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e6(e,t){e.g?e.g.add(t):e.h=t}function e5(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e3(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return C(e.i)}function e8(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(y(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(y(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(y(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}eZ.prototype.cancel=function(){if(this.i=e3(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e4=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e7(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e7){this.h=e.h,te(this,e.j),this.o=e.o,this.g=e.g,tt(this,e.s),this.l=e.l;var t=e.i,n=new td;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tn(this,n),this.m=e.m}else e&&(t=String(e).match(e4))?(this.h=!1,te(this,t[1]||"",!0),this.o=ts(t[2]||""),this.g=ts(t[3]||"",!0),tt(this,t[4]),this.l=ts(t[5]||"",!0),tn(this,t[6]||"",!0),this.m=ts(t[7]||"")):(this.h=!1,this.i=new td(null,this.h))}function e9(e){return new e7(e)}function te(e,t,n){e.j=n?ts(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tt(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function tn(e,t,n){var r,i;t instanceof td?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tp(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tg(this,t),ty(this,n,e))},r)),r.j=i):(n||(t=to(t,tc)),e.i=new td(t,e.h))}function tr(e,t,n){e.i.set(t,n)}function ti(e){return tr(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function ts(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function to(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ta),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ta(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e7.prototype.toString=function(){var e=[],t=this.j;t&&e.push(to(t,tl,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(to(t,tl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(to(n,"/"==n.charAt(0)?th:tu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",to(n,tf)),e.join("")};var tl=/[#\/\?@]/g,tu=/[#\?:]/g,th=/[#\?]/g,tc=/[#\?@]/g,tf=/#/g;function td(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tp(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tg(e,t){tp(e),t=tv(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tm(e,t){return tp(e),t=tv(e,t),e.g.has(t)}function ty(e,t,n){tg(e,t),0<n.length&&(e.i=null,e.g.set(tv(e,t),C(n)),e.h+=n.length)}function tv(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tw(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(e){}}function tE(){this.g=new ev}function tb(e){this.l=e.Ub||null,this.j=e.eb||!1}function t_(e,t){el.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tT(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tC(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tI(e)}function tI(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tS(e){let t="";return N(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function tx(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tS(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tr(e,t,n))}function tA(e){el.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(n=td.prototype).add=function(e,t){tp(this),this.i=null,e=tv(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},n.forEach=function(e,t){tp(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},n.na=function(){tp(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},n.V=function(e){tp(this);let t=[];if("string"==typeof e)tm(this,e)&&(t=t.concat(this.g.get(tv(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},n.set=function(e,t){return tp(this),this.i=null,tm(this,e=tv(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},T(tb,ew),tb.prototype.g=function(){return new t_(this.l,this.j)},tb.prototype.i=(e={},function(){return e}),T(t_,el),(n=t_.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tI(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||m).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tC(this)),this.readyState=0},n.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tI(this)),this.g&&(this.readyState=3,tI(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==m.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tT(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},n.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tC(this):tI(this),3==this.readyState&&tT(this)}},n.Ra=function(e){this.g&&(this.response=this.responseText=e,tC(this))},n.Qa=function(e){this.g&&(this.response=e,tC(this))},n.ga=function(){this.g&&tC(this)},n.setRequestHeader=function(e,t){this.u.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(t_.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),T(tA,el);var tD=/^https?$/i,tN=["POST","PUT"];function tk(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tR(e),tL(e)}function tR(e){e.A||(e.A=!0,eu(e,"complete"),eu(e,"error"))}function tO(e){if(e.h&&void 0!==g&&(!e.v[1]||4!=tP(e)||2!=e.Z())){if(e.u&&4==tP(e))ec(e.Ea,0,e);else if(eu(e,"readystatechange"),4==tP(e)){e.h=!1;try{let o=e.Z();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===o){var i=String(e.D).match(e4)[1]||null;!i&&m.self&&m.self.location&&(i=m.self.location.protocol.slice(0,-1)),n=!tD.test(i?i.toLowerCase():"")}t=n}if(t)eu(e,"complete"),eu(e,"success");else{e.m=6;try{var s=2<tP(e)?e.g.statusText:""}catch(e){s=""}e.l=s+" ["+e.Z()+"]",tR(e)}}finally{tL(e)}}}}function tL(e,t){if(e.g){tM(e);let n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||eu(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function tM(e){e.I&&(m.clearTimeout(e.I),e.I=null)}function tP(e){return e.g?e.g.readyState:0}function tU(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tB(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tF(e){this.Aa=0,this.i=[],this.j=new eL,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tB("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tB("baseRetryDelayMs",5e3,e),this.cb=tB("retryDelaySeedMs",1e4,e),this.Wa=tB("forwardChannelMaxRetries",2,e),this.wa=tB("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eZ(e&&e.concurrentRequestLimit),this.Da=new tE,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tV(e){if(tj(e),3==e.G){var t=e.U++,n=e9(e.I);if(tr(n,"SID",e.K),tr(n,"RID",t),tr(n,"TYPE","terminate"),tK(e,n),(t=new eF(e,e.j,t)).L=2,t.v=ti(e9(n)),n=!1,m.navigator&&m.navigator.sendBeacon)try{n=m.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&m.Image&&((new Image).src=t.v,n=!0),n||(t.g=t6(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ez(t)}t1(e)}function t$(e){e.g&&(tQ(e),e.g.cancel(),e.g=null)}function tj(e){t$(e),e.u&&(m.clearTimeout(e.u),e.u=null),tX(e),e.h.cancel(),e.s&&("number"==typeof e.s&&m.clearTimeout(e.s),e.s=null)}function tq(e){if(!e0(e.h)&&!e.s){e.s=!0;var t=e.Ga;P||F(),U||(P(),U=!0),B.add(t,e),e.B=0}}function tH(e,t){var n;n=t?t.l:e.U++;let r=e9(e.I);tr(r,"SID",e.K),tr(r,"RID",n),tr(r,"AID",e.T),tK(e,r),e.m&&e.o&&tx(r,e.m,e.o),n=new eF(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tz(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e6(e.h,n),eq(n,r,t)}function tK(e,t){e.H&&N(e.H,function(e,n){tr(t,n,e)}),e.l&&e8({},function(e,n){tr(t,n,e)})}function tz(e,t,n){n=Math.min(e.i.length,n);var r=e.l?b(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g,a=i[o].map;if(0>(n-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{e8(e,function(e,n){let i=e;v(e)&&(i=em(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tG(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;P||F(),U||(P(),U=!0),B.add(t,e),e.v=0}}function tW(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eO(b(e.Fa,e),tZ(e,e.v)),e.v++,!0)}function tQ(e){null!=e.A&&(m.clearTimeout(e.A),e.A=null)}function tY(e){e.g=new eF(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e9(e.qa);tr(t,"RID","rpc"),tr(t,"SID",e.K),tr(t,"AID",e.T),tr(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tr(t,"TO",e.ja),tr(t,"TYPE","xmlhttp"),tK(e,t),e.m&&e.o&&tx(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ti(e9(t)),n.m=null,n.P=!0,eH(n,e)}function tX(e){null!=e.C&&(m.clearTimeout(e.C),e.C=null)}function tJ(e,t){var n=null;if(e.g==t){tX(e),tQ(e),e.g=null;var r=2}else{if(!e2(e.h,t))return;n=t.D,e5(e.h,t),r=1}if(0!=e.G){if(t.o){if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;eu(r=ex(),new eR(r,n)),tq(e)}else tG(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==r&&(i=t,!(e1(e.h)>=e.h.j-+!!e.s)&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eO(b(e.Ga,e,i),tZ(e,e.B)),e.B++,!0)))||2==r&&tW(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),s){case 1:t0(e,5);break;case 4:t0(e,10);break;case 3:t0(e,6);break;default:t0(e,2)}}}function tZ(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function t0(e,t){if(e.j.info("Error code "+t),2==t){var n=b(e.fb,e),r=e.Xa;let t=!r;r=new e7(r||"//www.google.com/images/cleardot.gif"),m.location&&"http"==m.location.protocol||te(r,"https"),ti(r),t?function(e,t){let n=new eL;if(m.Image){let r=new Image;r.onload=_(tw,n,"TestLoadImage: loaded",!0,t,r),r.onerror=_(tw,n,"TestLoadImage: error",!1,t,r),r.onabort=_(tw,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=_(tw,n,"TestLoadImage: timeout",!1,t,r),m.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){let n=new eL,r=new AbortController,i=setTimeout(()=>{r.abort(),tw(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(i),e.ok?tw(n,"TestPingServer: ok",!0,t):tw(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tw(n,"TestPingServer: error",!1,t)})}(r.toString(),n)}else ek(2);e.G=0,e.l&&e.l.sa(t),t1(e),tj(e)}function t1(e){if(e.G=0,e.ka=[],e.l){let t=e3(e.h);(0!=t.length||0!=e.i.length)&&(I(e.ka,t),I(e.ka,e.i),e.h.i.length=0,C(e.i),e.i.length=0),e.l.ra()}}function t2(e,t,n){var r=n instanceof e7?e9(n):new e7(n);if(""!=r.g)t&&(r.g=t+"."+r.g),tt(r,r.s);else{var i=m.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e7(null);r&&te(s,r),t&&(s.g=t),i&&tt(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.ya,n&&t&&tr(r,n,t),tr(r,"VER",e.la),tK(e,r),r}function t6(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tA(e.Ca&&!e.pa?new tb({eb:n}):e.pa)).Ha(e.J),t}function t5(){}function t3(){}function t8(e,t){el.call(this),this.g=new tF(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!S(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t9(this)}function t4(e){eT.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t7(){eC.call(this),this.status=1}function t9(e){this.g=e}(n=tA.prototype).Ha=function(e){this.J=e},n.ea=function(e,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);n=n?n.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?eE(this.o):eE(t),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(n,String(e),!0),this.B=!1}catch(e){tk(this,e);return}if(e=r||"",r=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)r.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())r.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,o]of(i=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),s=m.FormData&&e instanceof m.FormData,!(0<=Array.prototype.indexOf.call(tN,n,void 0))||i||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(t,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tM(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tk(this,e)}},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,eu(this,"complete"),eu(this,"abort"),tL(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tL(this,!0)),tA.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tO(this):this.bb())},n.bb=function(){tO(this)},n.isActive=function(){return!!this.g},n.Z=function(){try{return 2<tP(this)?this.g.status:-1}catch(e){return -1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ey(t)}},n.Ba=function(){return this.m},n.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(n=tF.prototype).la=8,n.G=1,n.connect=function(e,t,n,r){ek(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=t2(this,null,this.W),tq(this)},n.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eF(this,this.j,e),s=this.o;if(this.S&&(s?O(s=k(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tz(this,i,t),tr(n=e9(this.I),"RID",e),tr(n,"CVER",22),this.D&&tr(n,"X-HTTP-Session-Id",this.D),tK(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(tS(s)))+"&"+t:this.m&&tx(n,this.m,s)),e6(this.h,i),this.Ua&&tr(n,"TYPE","init"),this.P?(tr(n,"$req",t),tr(n,"SID","null"),i.T=!0,eq(i,n,null)):eq(i,n,t),this.G=2}}else 3==this.G&&(e?tH(this,e):0==this.i.length||e0(this.h)||tH(this))}},n.Fa=function(){if(this.u=null,tY(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eO(b(this.ab,this),e)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ek(10),t$(this),tY(this))},n.Za=function(){null!=this.C&&(this.C=null,t$(this),tW(this),ek(19))},n.fb=function(e){e?(this.j.info("Successfully pinged google.com"),ek(2)):(this.j.info("Failed to ping google.com"),ek(1))},n.isActive=function(){return!!this.l&&this.l.isActive(this)},(n=t5.prototype).ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){},t3.prototype.g=function(e,t){return new t8(e,t)},T(t8,el),t8.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t8.prototype.close=function(){tV(this.g)},t8.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=em(e),e=n);t.i.push(new eJ(t.Ya++,e)),3==t.G&&tq(t)},t8.prototype.N=function(){this.g.l=null,delete this.j,tV(this.g),delete this.g,t8.aa.N.call(this)},T(t4,eT),T(t7,eC),T(t9,t5),t9.prototype.ua=function(){eu(this.g,"a")},t9.prototype.ta=function(e){eu(this.g,new t4(e))},t9.prototype.sa=function(e){eu(this.g,new t7)},t9.prototype.ra=function(){eu(this.g,"b")},t3.prototype.createWebChannel=t3.prototype.g,t8.prototype.send=t8.prototype.o,t8.prototype.open=t8.prototype.m,t8.prototype.close=t8.prototype.close,h=f.createWebChannelTransport=function(){return new t3},u=f.getStatEventTarget=function(){return ex()},l=f.Event=eI,a=f.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eP.NO_ERROR=0,eP.TIMEOUT=8,eP.HTTP_ERROR=6,o=f.ErrorCode=eP,eU.COMPLETE="complete",s=f.EventType=eU,eb.EventType=e_,e_.OPEN="a",e_.CLOSE="b",e_.ERROR="c",e_.MESSAGE="d",el.prototype.listen=el.prototype.K,i=f.WebChannel=eb,f.FetchXmlHttpFactory=tb,tA.prototype.listenOnce=tA.prototype.L,tA.prototype.getLastError=tA.prototype.Ka,tA.prototype.getLastErrorCode=tA.prototype.Ba,tA.prototype.getStatus=tA.prototype.Z,tA.prototype.getResponseJson=tA.prototype.Oa,tA.prototype.getResponseText=tA.prototype.oa,tA.prototype.send=tA.prototype.ea,tA.prototype.setWithCredentials=tA.prototype.Ha,r=f.XhrIo=tA}).apply(void 0!==c?c:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}),O("6ZWSX",function(t,n){e(t.exports,"Buffer",()=>r,e=>r=e),e(t.exports,"INSPECT_MAX_BYTES",()=>i,e=>i=e);var r,i,s=R("kuxul"),o=R("9NvM5");let a="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function l(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,u.prototype),t}function u(e,t,n){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return f(e)}return h(e,t,n)}function h(e,t,n){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!u.isEncoding(t))throw TypeError("Unknown encoding: "+t);let n=0|m(e,t),r=l(n),i=r.write(e,t);return i!==n&&(r=r.slice(0,i)),r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(V(e,Uint8Array)){let t=new Uint8Array(e);return p(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(V(e,ArrayBuffer)||e&&V(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(V(e,SharedArrayBuffer)||e&&V(e.buffer,SharedArrayBuffer)))return p(e,t,n);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return u.from(r,t,n);let i=function(e){if(u.isBuffer(e)){let t=0|g(e.length),n=l(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?l(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return u.from(e[Symbol.toPrimitive]("string"),t,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function f(e){return c(e),l(e<0?0:0|g(e))}function d(e){let t=e.length<0?0:0|g(e.length),n=l(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function p(e,t,n){let r;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),u.prototype),r}function g(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function m(e,t){if(u.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||V(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return U(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return B(e).length;default:if(i)return r?-1:U(e).length;t=(""+t).toLowerCase(),i=!0}}function y(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||(n>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,n){let r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=$[e[r]];return i}(this,t,n);case"utf8":case"utf-8":return b(this,t,n);case"ascii":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}(this,t,n);case"latin1":case"binary":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}(this,t,n);case"base64":var i,o,a;return i=this,o=t,a=n,0===o&&a===i.length?s.fromByteArray(i):s.fromByteArray(i.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,n){let r=e.slice(t,n),i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}(this,t,n);default:if(r)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function v(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function w(e,t,n,r,i){var s;if(0===e.length)return -1;if("string"==typeof n?(r=n,n=0):n>0x7fffffff?n=0x7fffffff:n<-0x80000000&&(n=-0x80000000),(s=n*=1)!=s&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return -1;n=e.length-1}else if(n<0){if(!i)return -1;n=0}if("string"==typeof t&&(t=u.from(t,r)),u.isBuffer(t))return 0===t.length?-1:E(e,t,n,r,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):E(e,[t],n,r,i);throw TypeError("val must be string, number or Buffer")}function E(e,t,n,r,i){let s,o=1,a=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,n/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(e,s)===u(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===l)return r*o}else -1!==r&&(s-=s-r),r=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let r=0;r<l;r++)if(u(e,s+r)!==u(t,r)){n=!1;break}if(n)return s}return -1}function b(e,t,n){n=Math.min(e.length,n);let r=[],i=t;for(;i<n;){let t=e[i],s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(n=e[i+1]))==128&&(l=(31&t)<<6|63&n)>127&&(s=l);break;case 3:n=e[i+1],r=e[i+2],(192&n)==128&&(192&r)==128&&(l=(15&t)<<12|(63&n)<<6|63&r)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],(192&n)==128&&(192&r)==128&&(192&a)==128&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}function _(e,t,n){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>n)throw RangeError("Trying to access beyond buffer length")}function T(e,t,n,r,i,s){if(!u.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(n+r>e.length)throw RangeError("Index out of range")}function C(e,t,n,r,i){O(t,r,i,e,n,7);let s=Number(t&BigInt(0xffffffff));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function I(e,t,n,r,i){O(t,r,i,e,n,7);let s=Number(t&BigInt(0xffffffff));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function S(e,t,n,r,i,s){if(n+r>e.length||n<0)throw RangeError("Index out of range")}function x(e,t,n,r,i){return t*=1,n>>>=0,i||S(e,t,n,4,34028234663852886e22,-34028234663852886e22),o.write(e,t,n,r,23,4),n+4}function A(e,t,n,r,i){return t*=1,n>>>=0,i||S(e,t,n,8,17976931348623157e292,-17976931348623157e292),o.write(e,t,n,r,52,8),n+8}r=u,i=50,u.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(e,t,n){return h(e,t,n)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(e,t,n){return(c(e),e<=0)?l(e):void 0!==t?"string"==typeof n?l(e).fill(t,n):l(e).fill(t):l(e)},u.allocUnsafe=function(e){return f(e)},u.allocUnsafeSlow=function(e){return f(e)},u.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==u.prototype},u.compare=function(e,t){if(V(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),V(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(e)||!u.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:+(r<n)},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(e,t){let n;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return u.alloc(0);if(void 0===t)for(n=0,t=0;n<e.length;++n)t+=e[n].length;let r=u.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){let t=e[n];if(V(t,Uint8Array))i+t.length>r.length?(u.isBuffer(t)||(t=u.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else if(u.isBuffer(t))t.copy(r,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return r},u.byteLength=m,u.prototype._isBuffer=!0,u.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)v(this,t,t+1);return this},u.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},u.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},u.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?b(this,0,e):y.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(e){if(!u.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){let e="",t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(u.prototype[a]=u.prototype.inspect),u.prototype.compare=function(e,t,n,r,i){if(V(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return -1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;let s=i-r,o=n-t,a=Math.min(s,o),l=this.slice(r,i),h=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==h[e]){s=l[e],o=h[e];break}return s<o?-1:+(o<s)},u.prototype.includes=function(e,t,n){return -1!==this.indexOf(e,t,n)},u.prototype.indexOf=function(e,t,n){return w(this,e,t,n,!0)},u.prototype.lastIndexOf=function(e,t,n){return w(this,e,t,n,!1)},u.prototype.write=function(e,t,n,r){var i,s,o,a,l,u,h,c;if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===n||n>f)&&(n=f),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let d=!1;for(;;)switch(r){case"hex":return function(e,t,n,r){let i;n=Number(n)||0;let s=e.length-n;r?(r=Number(r))>s&&(r=s):r=s;let o=t.length;for(r>o/2&&(r=o/2),i=0;i<r;++i){var a;let r=parseInt(t.substr(2*i,2),16);if((a=r)!=a)break;e[n+i]=r}return i}(this,e,t,n);case"utf8":case"utf-8":return i=t,s=n,F(U(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=n,F(function(e){let t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(e),this,o,a);case"base64":return l=t,u=n,F(B(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=t,c=n,F(function(e,t){let n,r;let i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i.push(n%256),i.push(r);return i}(e,this.length-h),this,h,c);default:if(d)throw TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),d=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},u.prototype.slice=function(e,t){let n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);let r=this.subarray(e,t);return Object.setPrototypeOf(r,u.prototype),r},u.prototype.readUintLE=u.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||_(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},u.prototype.readUintBE=u.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||_(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},u.prototype.readUint8=u.prototype.readUInt8=function(e,t){return e>>>=0,t||_(e,1,this.length),this[e]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(e,t){return e>>>=0,t||_(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(e,t){return e>>>=0,t||_(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(e,t){return e>>>=0,t||_(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(e,t){return e>>>=0,t||_(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readBigUInt64LE=j(function(e){L(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&M(e,this.length-8);let r=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*n;return BigInt(r)+(BigInt(i)<<BigInt(32))}),u.prototype.readBigUInt64BE=j(function(e){L(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&M(e,this.length-8);let r=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],i=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)}),u.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||_(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},u.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||_(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},u.prototype.readInt8=function(e,t){return(e>>>=0,t||_(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},u.prototype.readInt16LE=function(e,t){e>>>=0,t||_(e,2,this.length);let n=this[e]|this[e+1]<<8;return 32768&n?0xffff0000|n:n},u.prototype.readInt16BE=function(e,t){e>>>=0,t||_(e,2,this.length);let n=this[e+1]|this[e]<<8;return 32768&n?0xffff0000|n:n},u.prototype.readInt32LE=function(e,t){return e>>>=0,t||_(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return e>>>=0,t||_(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readBigInt64LE=j(function(e){L(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&M(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),u.prototype.readBigInt64BE=j(function(e){L(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&M(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+n)}),u.prototype.readFloatLE=function(e,t){return e>>>=0,t||_(e,4,this.length),o.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return e>>>=0,t||_(e,4,this.length),o.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return e>>>=0,t||_(e,8,this.length),o.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return e>>>=0,t||_(e,8,this.length),o.read(this,e,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(e,t,n,r){if(e*=1,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;T(this,e,t,n,r,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(e,t,n,r){if(e*=1,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;T(this,e,t,n,r,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},u.prototype.writeUint8=u.prototype.writeUInt8=function(e,t,n){return e*=1,t>>>=0,n||T(this,e,t,1,255,0),this[t]=255&e,t+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(e,t,n){return e*=1,t>>>=0,n||T(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(e,t,n){return e*=1,t>>>=0,n||T(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(e,t,n){return e*=1,t>>>=0,n||T(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(e,t,n){return e*=1,t>>>=0,n||T(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},u.prototype.writeBigUInt64LE=j(function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=j(function(e,t=0){return I(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(e,t,n,r){if(e*=1,t>>>=0,!r){let r=Math.pow(2,8*n-1);T(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},u.prototype.writeIntBE=function(e,t,n,r){if(e*=1,t>>>=0,!r){let r=Math.pow(2,8*n-1);T(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},u.prototype.writeInt8=function(e,t,n){return e*=1,t>>>=0,n||T(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,n){return e*=1,t>>>=0,n||T(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},u.prototype.writeInt16BE=function(e,t,n){return e*=1,t>>>=0,n||T(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},u.prototype.writeInt32LE=function(e,t,n){return e*=1,t>>>=0,n||T(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},u.prototype.writeInt32BE=function(e,t,n){return e*=1,t>>>=0,n||T(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},u.prototype.writeBigInt64LE=j(function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=j(function(e,t=0){return I(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeFloatLE=function(e,t,n){return x(this,e,t,!0,n)},u.prototype.writeFloatBE=function(e,t,n){return x(this,e,t,!1,n)},u.prototype.writeDoubleLE=function(e,t,n){return A(this,e,t,!0,n)},u.prototype.writeDoubleBE=function(e,t,n){return A(this,e,t,!1,n)},u.prototype.copy=function(e,t,n,r){if(!u.isBuffer(e))throw TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(r<0)throw RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);let i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},u.prototype.fill=function(e,t,n,r){let i;if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw TypeError("encoding must be a string");if("string"==typeof r&&!u.isEncoding(r))throw TypeError("Unknown encoding: "+r);if(1===e.length){let t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError("Out of range index");if(n<=t)return this;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{let s=u.isBuffer(e)?e:u.from(e,r),o=s.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};let D={};function N(e,t,n){D[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function k(e){let t="",n=e.length,r=+("-"===e[0]);for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function O(e,t,n,r,i,s){if(e>n||e<t){let r;let i="bigint"==typeof t?"n":"";throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new D.ERR_OUT_OF_RANGE("value",r,e)}L(i,"offset"),(void 0===r[i]||void 0===r[i+s])&&M(i,r.length-(s+1))}function L(e,t){if("number"!=typeof e)throw new D.ERR_INVALID_ARG_TYPE(t,"number",e)}function M(e,t,n){if(Math.floor(e)!==e)throw L(e,n),new D.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new D.ERR_BUFFER_OUT_OF_BOUNDS;throw new D.ERR_OUT_OF_RANGE(n||"offset",`>= ${+!!n} and <= ${t}`,e)}N("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),N("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),N("ERR_OUT_OF_RANGE",function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>0x100000000?i=k(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=k(i)),i+="n"),r+=` It must be ${t}. Received ${i}`},RangeError);let P=/[^+/0-9A-Za-z-_]/g;function U(e,t){let n;t=t||1/0;let r=e.length,i=null,s=[];for(let o=0;o<r;++o){if((n=e.charCodeAt(o))>55295&&n<57344){if(!i){if(n>56319||o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return s}function B(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(P,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function F(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length)&&!(i>=e.length);++i)t[i+n]=e[i];return i}function V(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let $=function(){let e="0123456789abcdef",t=Array(256);for(let n=0;n<16;++n){let r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function j(e){return"undefined"==typeof BigInt?q:e}function q(){throw Error("BigInt not supported")}}),O("kuxul",function(t,n){e(t.exports,"toByteArray",()=>r,e=>r=e),e(t.exports,"fromByteArray",()=>i,e=>i=e),r=function(e){var t,n,r=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");-1===n&&(n=t);var r=n===t?0:4-n%4;return[n,r]}(e),i=r[0],s=r[1],l=new a((i+s)*3/4-s),u=0,h=s>0?i-4:i;for(n=0;n<h;n+=4)t=o[e.charCodeAt(n)]<<18|o[e.charCodeAt(n+1)]<<12|o[e.charCodeAt(n+2)]<<6|o[e.charCodeAt(n+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===s&&(t=o[e.charCodeAt(n)]<<2|o[e.charCodeAt(n+1)]>>4,l[u++]=255&t),1===s&&(t=o[e.charCodeAt(n)]<<10|o[e.charCodeAt(n+1)]<<4|o[e.charCodeAt(n+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},i=function(e){for(var t,n=e.length,r=n%3,i=[],o=0,a=n-r;o<a;o+=16383)i.push(function(e,t,n){for(var r,i=[],o=t;o<n;o+=3)r=(e[o]<<16&0xff0000)+(e[o+1]<<8&65280)+(255&e[o+2]),i.push(s[r>>18&63]+s[r>>12&63]+s[r>>6&63]+s[63&r]);return i.join("")}(e,o,o+16383>a?a:o+16383));return 1===r?i.push(s[(t=e[n-1])>>2]+s[t<<4&63]+"=="):2===r&&i.push(s[(t=(e[n-2]<<8)+e[n-1])>>10]+s[t>>4&63]+s[t<<2&63]+"="),i.join("")};for(var r,i,s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,h=l.length;u<h;++u)s[u]=l[u],o[l.charCodeAt(u)]=u;o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63}),O("9NvM5",function(t,n){var r,i;e(t.exports,"read",()=>r,e=>r=e),e(t.exports,"write",()=>i,e=>i=e),r=function(e,t,n,r,i){var s,o,a=8*i-r-1,l=(1<<a)-1,u=l>>1,h=-7,c=n?i-1:0,f=n?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-h)-1,d>>=-h,h+=a;h>0;s=256*s+e[t+c],c+=f,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=r;h>0;o=256*o+e[t+c],c+=f,h-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,r),s-=u}return(d?-1:1)*o*Math.pow(2,s-r)},i=function(e,t,n,r,i,s){var o,a,l,u=8*s-i-1,h=(1<<u)-1,c=h>>1,f=5960464477539062e-23*(23===i),d=r?0:s-1,p=r?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(a=+!!isNaN(t),o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=h?(a=0,o=h):o+c>=1?(a=(t*l-1)*Math.pow(2,i),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;e[n+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[n+d]=255&o,d+=p,o/=256,u-=8);e[n+d-p]|=128*g}}),O("fhN3L",function(t,n){e(t.exports,"initializeApp",()=>R("7xvHX").initializeApp),e(t.exports,"registerVersion",()=>R("7xvHX").registerVersion),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,R("7xvHX").registerVersion)("firebase","11.3.1","app")});var L=R("gEjZb");R("ilpIi");var M=R("9HrqM"),P={};t=P,n=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"],i={},s=null;function o(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(){for(var n=this.getLevel(),i=0;i<r.length;i++){var s=r[i];this[s]=i<n?e:this.methodFactory(s,n,this.name)}if(this.log=this.debug,typeof console===t&&n<this.levels.SILENT)return"No console available for logging"}function u(e){return function(){typeof console!==t&&(l.call(this),this[e].apply(this,arguments))}}function h(r,i,s){var l;return"debug"===(l=r)&&(l="log"),typeof console!==t&&("trace"===l&&n?a:void 0!==console[l]?o(console,l):void 0!==console.log?o(console,"log"):e)||u.apply(this,arguments)}function c(e,n){var o,a,u,c=this,f="loglevel";function d(){var e;if(typeof window!==t&&f){try{e=window.localStorage[f]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,r=encodeURIComponent(f),i=n.indexOf(r+"=");-1!==i&&(e=/^([^;]+)/.exec(n.slice(i+r.length+1))[1])}catch(e){}return void 0===c.levels[e]&&(e=void 0),e}}function p(e){var t=e;if("string"==typeof t&&void 0!==c.levels[t.toUpperCase()]&&(t=c.levels[t.toUpperCase()]),"number"==typeof t&&t>=0&&t<=c.levels.SILENT)return t;throw TypeError("log.setLevel() called with invalid level: "+e)}"string"==typeof e?f+=":"+e:"symbol"==typeof e&&(f=void 0),c.name=e,c.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},c.methodFactory=n||h,c.getLevel=function(){return null!=u?u:null!=a?a:o},c.setLevel=function(e,n){return u=p(e),!1!==n&&function(e){var n=(r[e]||"silent").toUpperCase();if(typeof window!==t&&f){try{window.localStorage[f]=n;return}catch(e){}try{window.document.cookie=encodeURIComponent(f)+"="+n+";"}catch(e){}}}(u),l.call(c)},c.setDefaultLevel=function(e){a=p(e),d()||c.setLevel(e,!1)},c.resetLevel=function(){u=null,function(){if(typeof window!==t&&f){try{window.localStorage.removeItem(f)}catch(e){}try{window.document.cookie=encodeURIComponent(f)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}(),l.call(c)},c.enableAll=function(e){c.setLevel(c.levels.TRACE,e)},c.disableAll=function(e){c.setLevel(c.levels.SILENT,e)},c.rebuild=function(){if(s!==c&&(o=p(s.getLevel())),l.call(c),s===c)for(var e in i)i[e].rebuild()},o=p(s?s.getLevel():"WARN");var g=d();null!=g&&(u=p(g)),l.call(c)}(s=new c).getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw TypeError("You must supply a name when creating a logger.");var t=i[e];return t||(t=i[e]=new c(e,s.methodFactory)),t};var f=typeof window!==t?window.log:void 0;return s.noConflict=function(){return typeof window!==t&&window.log===s&&(window.log=f),s},s.getLoggers=function(){return i},s.default=s,s},"function"==typeof define&&define.amd?define(n):P?P=n():t.log=n(),(r=m||(m={})).STRING="string",r.NUMBER="number",r.INTEGER="integer",r.BOOLEAN="boolean",r.ARRAY="array",r.OBJECT="object",(i=y||(y={})).LANGUAGE_UNSPECIFIED="language_unspecified",i.PYTHON="python",(s=v||(v={})).OUTCOME_UNSPECIFIED="outcome_unspecified",s.OUTCOME_OK="outcome_ok",s.OUTCOME_FAILED="outcome_failed",s.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=["user","model","function","system"];(o=w||(w={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",o.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",o.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",o.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(a=E||(E={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",a.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",a.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",a.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",a.BLOCK_NONE="BLOCK_NONE",(l=b||(b={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",l.NEGLIGIBLE="NEGLIGIBLE",l.LOW="LOW",l.MEDIUM="MEDIUM",l.HIGH="HIGH",(u=_||(_={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",u.SAFETY="SAFETY",u.OTHER="OTHER",(h=T||(T={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",h.STOP="STOP",h.MAX_TOKENS="MAX_TOKENS",h.SAFETY="SAFETY",h.RECITATION="RECITATION",h.LANGUAGE="LANGUAGE",h.OTHER="OTHER",(c=C||(C={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",c.RETRIEVAL_QUERY="RETRIEVAL_QUERY",c.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",c.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",c.CLASSIFICATION="CLASSIFICATION",c.CLUSTERING="CLUSTERING",(f=I||(I={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",f.AUTO="AUTO",f.ANY="ANY",f.NONE="NONE",(d=S||(S={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",d.MODE_DYNAMIC="MODE_DYNAMIC";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class F extends B{constructor(e,t){super(e),this.response=t}}class V extends B{constructor(e,t,n,r){super(e),this.status=t,this.statusText=n,this.errorDetails=r}}class $ extends B{}(p=x||(x={})).GENERATE_CONTENT="generateContent",p.STREAM_GENERATE_CONTENT="streamGenerateContent",p.COUNT_TOKENS="countTokens",p.EMBED_CONTENT="embedContent",p.BATCH_EMBED_CONTENTS="batchEmbedContents";class j{constructor(e,t,n,r,i){this.model=e,this.task=t,this.apiKey=n,this.stream=r,this.requestOptions=i}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",r=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",i=`${r}/${n}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}async function q(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.21.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let r=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(e){throw new $(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${e.message}`)}for(let[e,t]of r.entries()){if("x-goog-api-key"===e)throw new $(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new $(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function H(e,t,n,r,i,s){let o=new j(e,t,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(s)),{method:"POST",headers:await q(o),body:i})}}async function K(e,t,n,r,i,s={},o=fetch){let{url:a,fetchOptions:l}=await H(e,t,n,r,i,s);return z(a,l,o)}async function z(e,t,n=fetch){let r;try{r=await n(e,t)}catch(t){!function(e,t){let n=e;throw e instanceof V||e instanceof $||((n=new B(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n}(t,e)}return r.ok||await G(r,e),r}async function G(e,t){let n,r="";try{let t=await e.json();r=t.error.message,t.error.details&&(r+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new V(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${r}`,e.status,e.statusText,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),X(e.candidates[0]))throw new F(`${J(e)}`,e);return function(e){var t,n,r,i;let s=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(r=e.candidates)||void 0===r?void 0:r[0].content)||void 0===i?void 0:i.parts)t.text&&s.push(t.text),t.executableCode&&s.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&s.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}(e)}if(e.promptFeedback)throw new F(`Text not available. ${J(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),X(e.candidates[0]))throw new F(`${J(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Q(e)[0]}if(e.promptFeedback)throw new F(`Function call not available. ${J(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),X(e.candidates[0]))throw new F(`${J(e)}`,e);return Q(e)}if(e.promptFeedback)throw new F(`Function call not available. ${J(e)}`,e)},e}function Q(e){var t,n,r,i;let s=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(r=e.candidates)||void 0===r?void 0:r[0].content)||void 0===i?void 0:i.parts)t.functionCall&&s.push(t.functionCall);return s.length>0?s:void 0}const Y=[T.RECITATION,T.SAFETY,T.LANGUAGE];function X(e){return!!e.finishReason&&Y.includes(e.finishReason)}function J(e){var t,n,r;let i="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)i+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(i+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(i+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(r=e.candidates)||void 0===r?void 0:r[0]){let t=e.candidates[0];X(t)&&(i+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(i+=`: ${t.finishMessage}`))}return i}function Z(e){return this instanceof Z?(this.v=e,this):new Z(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function et(e){let t=[],n=e.getReader();for(;;){let{done:e,value:r}=await n.read();if(e)return W(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let r={};for(let i of e.content.parts)i.text&&(r.text=i.text),i.functionCall&&(r.functionCall=i.functionCall),i.executableCode&&(r.executableCode=i.executableCode),i.codeExecutionResult&&(r.codeExecutionResult=i.codeExecutionResult),0===Object.keys(r).length&&(r.text=""),n.candidates[t].content.parts.push(r)}}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t,n,r){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function r(){return t.read().then(({value:t,done:i})=>{let s;if(i){if(n.trim()){e.error(new B("Failed to parse stream"));return}e.close();return}let o=(n+=t).match(ee);for(;o;){try{s=JSON.parse(o[1])}catch(t){e.error(new B(`Error parsing JSON response: "${o[1]}"`));return}e.enqueue(s),o=(n=n.substring(o[0].length)).match(ee)}return r()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(e){i[e]&&(r[e]=function(t){return new Promise(function(n,r){s.push([e,t,n,r])>1||a(e,t)})})}function a(e,t){try{var n;(n=i[e](t)).value instanceof Z?Promise.resolve(n.value.v).then(l,u):h(s[0][2],n)}catch(e){h(s[0][3],e)}}function l(e){a("next",e)}function u(e){a("throw",e)}function h(e,t){e(t),s.shift(),s.length&&a(s[0][0],s[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield Z(t.read());if(n)break;yield yield Z(W(e))}})}(t),response:et(n)}}(await K(t,x.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),r))}async function er(e,t,n,r){let i=await K(t,x.GENERATE_CONTENT,e,!1,JSON.stringify(n),r);return{response:W(await i.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function es(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},r=!1,i=!1;for(let s of e)"functionResponse"in s?(n.parts.push(s),i=!0):(t.parts.push(s),r=!0);if(r&&i)throw new B("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new B("No content is provided for sending chat message.");return r?t:n}(t)}function eo(e){let t;return t=e.contents?e:{contents:[es(e)]},e.systemInstruction&&(t.systemInstruction=ei(e.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],el={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},eu="SILENT_ERROR";class eh{constructor(e,t,n,r={}){this.model=t,this.params=n,this._requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:r}=n;if(!t&&"user"!==e)throw new B(`First content should be with role 'user', got ${e}`);if(!U.includes(e))throw new B(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(U)}`);if(!Array.isArray(r))throw new B("Content should have 'parts' property with an array of Parts");if(0===r.length)throw new B("Each Content should have at least one part");let i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of r)for(let t of ea)t in e&&(i[t]+=1);let s=el[e];for(let t of ea)if(!s.includes(t)&&i[t]>0)throw new B(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,r,i,s,o,a;let l;await this._sendPromise;let u=es(e),h={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(r=this.params)||void 0===r?void 0:r.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(s=this.params)||void 0===s?void 0:s.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,u]},c=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>er(this._apiKey,this.model,h,c)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(u);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=J(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,r,i,s,o,a;await this._sendPromise;let l=es(e),u={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(r=this.params)||void 0===r?void 0:r.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(s=this.params)||void 0===s?void 0:s.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,l]},h=Object.assign(Object.assign({},this._requestOptions),t),c=en(this._apiKey,this.model,u,h);return this._sendPromise=this._sendPromise.then(()=>c).catch(e=>{throw Error(eu)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=J(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==eu&&console.error(e)}),c}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(e,t,n,r){return(await K(t,x.COUNT_TOKENS,e,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ef(e,t,n,r){return(await K(t,x.EMBED_CONTENT,e,!1,JSON.stringify(n),r)).json()}async function ed(e,t,n,r){let i=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await K(t,x.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=ei(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let r=eo(e),i=Object.assign(Object.assign({},this._requestOptions),t);return er(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},r),i)}async generateContentStream(e,t={}){var n;let r=eo(e),i=Object.assign(Object.assign({},this._requestOptions),t);return en(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},r),i)}startChat(e){var t;return new eh(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let r={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},i=null!=e.generateContentRequest;if(e.contents){if(i)throw new $("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=e.contents}else if(i)r=Object.assign(Object.assign({},r),e.generateContentRequest);else{let t=es(e);r.contents=[t]}return{generateContentRequest:r}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),r=Object.assign(Object.assign({},this._requestOptions),t);return ec(this.apiKey,this.model,n,r)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:es(e)}:e,r=Object.assign(Object.assign({},this._requestOptions),t);return ef(this.apiKey,this.model,n,r)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return ed(this.apiKey,this.model,e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new B("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ep(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new $("Cached content must contain a `name` field.");if(!e.model)throw new $("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new $(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let r=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new ep(this.apiKey,r,n)}}const em=document.getElementById("bookTitleInput"),ey=document.getElementById("bookAuthorInput"),ev=document.getElementById("bookGenreInput"),ew=document.getElementById("addBookBtn"),eE=document.getElementById("bookList"),eb=document.getElementById("send-btn"),e_=document.getElementById("chat-input"),eT=document.getElementById("chat-history"),eC=document.getElementById("chatbot-container"),eI=document.getElementById("chatbot-header");let eS="",ex="",eA="",eD="";const eN={fantasy:"Fantasy",hfiction:"Historical Fiction",mystthrill:"Mystery/Thriller",nfiction:"Non-Fiction",romance:"Romance",scifi:"SciFi",selfhelp:"Self Help"};async function ek(e,t,n){return await (0,M.addDoc)((0,M.collection)(L.db,"books"),{genre:n,author:t,title:e,read:!1,rating:0,removed:!1})}async function eR(){var e=await (0,M.getDocs)((0,M.collection)(L.db,"books"));let t=[];return e.forEach(e=>{t.push(e)}),t}function eO(e){return e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}async function eL(){A=new eg((await (0,M.getDoc)((0,M.doc)(L.db,"apikey","googlegenai"))).data().key).getGenerativeModel({model:"gemini-1.5-flash"})}function eM(e){let t=document.createElement("div");t.textContent=e,t.className="history",eT.appendChild(t),e_.value=""}function eP(e){let t="";return Object.entries(eN).forEach(([n,r])=>{r.toLowerCase()===e.toLowerCase().trim()&&(t=n)}),!!eN[t]&&t}async function eU(e){eM((await A.generateContent(e)).response.text())}async function eB(){let e=await eR();eE.innerHTML="";let t=[];e.forEach(e=>{let n=e.data();t.push({id:e.id,author:n.author,genre:n.genre,rating:n.rating,read:n.read,title:n.title,removed:n.removed})}),t.sort((e,t)=>{let n=e.author.toUpperCase(),r=t.author.toUpperCase();return n<r?-1:+(n>r)}),t.forEach(e=>{e.removed||eq(e.id,e)})}async function eF(e,t){let n=(0,M.doc)(L.db,"books",e);await (0,M.updateDoc)(n,{rating:t,read:!0})}async function eV(e,t,n){let r=await ek(e,t,n),i=await (0,M.getDoc)(r);eq(r.id,i.data())}async function e$(e){await (0,M.updateDoc)((0,M.doc)(L.db,"books",e),{removed:!0})}function ej(e){document.getElementById(e).remove()}function eq(e,t){let n=document.createElement("article");n.id=e,n.tabIndex=0,n.classList.add("book");let r="",i="";if(t.read?(r=`
      <p class="read">Rating: ${t.rating}/5</p>`,i=`
      <div class="book-actions">
        <button id="edit-${e}" class="edit-rating-btn">Edit Rating</button>
        <button id="remove-${e}" class="remove-btn">Remove Book</button>
      </div>
    `):(r=`
      <label class="not-read" for="rate-${e}">Submit a Rating When Read</label>
      <div class="book-rating-input">
        <input name="input-${e}" type="number" min="1" max="5" placeholder="1-5" id="rate-${e}" aria-label="Rating input for ${t.title}" />
        <button id="submit-${e}">I've Read It!</button>
      </div>
    `,i=`<button id="remove-${e}" class="remove-btn">Remove Book</button>`),n.innerHTML=`
    <div class="book-header">
      <h3 class="book-title">${t.title}</h3>
      <p class="book-author">By: ${t.author}</p>
    </div>
    <p class="book-genre">Genre: ${eN[t.genre]||"Unknown"}</p>
    <div class="book-rating">
      ${r}
      ${i}
    </div>
  `,eE.appendChild(n),t.read){let t=document.getElementById(`edit-${e}`);t&&t.addEventListener("click",()=>{n.querySelector(".book-rating").innerHTML=`
          <div class="book-rating-input">
            <input type="number" min="1" max="5" placeholder="1-5" id="edit-input-${e}" aria-label="Submit a new rating" />
            <button id="save-edit-${e}">Save Rating</button>
          </div>
        `,document.getElementById(`save-edit-${e}`).addEventListener("click",async()=>{let t=parseInt(document.getElementById(`edit-input-${e}`).value);t>=1&&t<=5?(await eF(e,t),eB()):alert("Please enter a valid rating between 1 and 5.")})})}else document.getElementById(`submit-${e}`).addEventListener("click",async()=>{let t=parseInt(document.getElementById(`rate-${e}`).value);t>=1&&t<=5?(await eF(e,t),eB()):alert("Please enter a valid rating between 1 and 5.")});document.getElementById(`remove-${e}`).addEventListener("click",async t=>{("ARTICLE"===t.target.parentNode.tagName||t.target.closest("article"))&&(e$(e),ej(e))})}function eH(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}window.addEventListener("load",()=>{eL(),eB()}),ew.addEventListener("click",async()=>{let e=em.value.trim(),t=ey.value.trim(),n=ev.value.trim();if(e&&t&&n){let r=eH(e),i=eH(t),s=eH(n);await eV(r,i,s),ey.value="",ev.value="",em.value=""}else alert("Please fill out all fields!")}),eb.addEventListener("click",async()=>{let e=e_.value.trim().toLowerCase();e?!function(e){let t=e.trim(),n=t.toLowerCase();if(eS&&!ex)return ex=eO(t),eM(`What's the genre for "${eS}"?`),!0;if(eS&&ex&&!eA){let e=eP(t);return e?(eV(eS,ex,eA=e),eM(`Added "${eS}" by ${ex} under the ${eA} genre.`),eS="",ex="",eA=""):eM("Sorry, we don't have that genre in our library. Please choose from: "+Object.values(eN).join(", ")),!0}if((n.startsWith("add")||n.startsWith("i want to add")||n.startsWith("can you add")||n.startsWith("the title is"))&&!n.includes(" by ")&&!n.includes("the author is")){let e=t.match(/^(?:i want to add|add|can you add|the title is)(?: the book| book)?\s*"?([^"]+?)"?\s*$/);if(e)return eS=eO(e[1].trim()),eM(`Who is the author of "${eS}"?`),!0}let r=t.match(/(?:i want to add|add|can you add|the title is)(?: the book| book)?\s*"?([^"]+?)"?\s*(?=\s+by\b|\s+the author is\b)/i),i=t.match(/(?:by|the author is)\s*([^"]+?)(?=$|\s+(?:the genre is|it's a|it is a|its a|this falls under))/i),s=t.match(/(?:the genre is|it's a|it is a|its a|this falls under)\s*"?([^"]+?)"?\s*$/i);if(r&&(eS=eO(r[1].trim())),i&&i){let e=i[1].trim();ex=eO(e=e.replace(/^by\s+/i,""))}if(s&&(eA=eP(s[1].trim())),eS)return ex?eA?(eV(eS,ex,eA),eM(`Added "${eS}" by ${ex} under the ${eA} genre.`),eS="",ex="",eA=""):eM(`What's the genre for "${eS}"?`):eM(`Who is the author of "${eS}"?`),!0;let o=n.match(/(?:rate|i want to rate) "?([^\"]+)"? (?:a )?(\d)\/5/i);if(o){if(eS=eO(o[1].trim()),(eD=parseInt(o[2]))>=1&&eD<=5){let e=!1;document.querySelectorAll(".book").forEach(t=>{let n=t.querySelector(".book-title");n&&n.textContent.toLowerCase()===eS.toLowerCase()&&(t.querySelector(".read")?eM(`"${eS}" is already rated. If you'd like to update its rating, please use the edit rating command.`):(eF(t.id,eD),eM(`Rated "${eS}" as ${eD}/5.`),eB(),eD="",eS=""),e=!0)}),e||eM(`You haven't added "${eS}" to your bookshelf yet.`)}else eM("Ratings must be whole numbers between 1 and 5.");return!0}let a=n.match(/(?:edit rating|update rating)(?: for)?\s*"?([^"]+?)"?\s*(?:to)?\s*(\d)\/5/i);if(a){eS=eO(a[1].trim()),eD=parseInt(a[2]);let e=!1;return document.querySelectorAll(".book").forEach(t=>{let n=t.querySelector(".book-title");n&&n.textContent.toLowerCase()===eS.toLowerCase()&&(eF(t.id,eD),eM(`Updated rating for "${eS}" to ${eD}/5.`),eB(),eD="",eS="",e=!0)}),e||eM(`The book "${eS}" is not found on your shelf.`),!0}let l=n.match(/(?:i want to|remove|delete) (?:the )?book "?([^\"]+)"?/i);if(l){if(eS=eO(l[1].trim())){let e=!1;document.querySelectorAll(".book").forEach(t=>{let n=t.querySelector(".book-title");if(n&&n.textContent.toLowerCase()===eS.toLowerCase()){let n=t.id;e$(n),ej(n),eM(`Removed "${eS}" from the list.`),e=!0,eS=""}}),e||eM(`The book, "${eS}", was not found.`)}else eM("Please specify a book title to remove.");return!0}return!1}(e)&&eU(e):eM("Please ask a question.")}),e_.addEventListener("keypress",function(e){"Enter"===e.key&&eb.click()}),eI.addEventListener("click",()=>{eC.classList.contains("collapsed")?(eC.classList.remove("collapsed"),eC.classList.add("expanded"),eI.textContent="Close Chat"):(eC.classList.remove("expanded"),eC.classList.add("collapsed"),eI.textContent="Chat!")}),ey.addEventListener("keypress",function(e){"Enter"===e.key&&ew.click()}),em.addEventListener("keypress",function(e){"Enter"===e.key&&ew.click()}),ev.addEventListener("keypress",function(e){"Enter"===e.key&&ew.click()}),eE.addEventListener("keypress",async function(e){"remove-btn"===e.target.className&&"Enter"===e.key&&(e$(e.target.id),ej(e.target.id))}),window.addEventListener("error",function(e){console.error("Error occurred: ",e.message)}),((g=P)&&g.__esModule?g.default:g).setLevel("info");
//# sourceMappingURL=index.98edab3b.js.map
