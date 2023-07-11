'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "65b6f2a9afa4c344251f52263748e9fb",
".git/config": "83b4eb70045671b6fd24d1099b0938b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8203a9a16841c8c6d9e9a5701834e187",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2e311ed8e169e3999bc992254e3ef730",
".git/logs/refs/heads/main": "e4006d7fe49d9805370e3c3c08fd755d",
".git/logs/refs/remotes/origin/main": "ef557873a6b89b8e6914912913c21cec",
".git/objects/01/f30732e25a205c349d0d70ac6615404f78d92c": "5c5355aa7961bf5c30e721a5c8f58453",
".git/objects/03/42ba4c93b3e634ceaf5cb19c2914d2047c4248": "c2b1be2a62c9d9cbf3baf0f4f844c3a6",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/52e69f41a2ebd7bf2d41fefcfe7428e8fec27f": "19e5b2256723a1b33ddb5666be0c1eee",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/09/981b0d7ccff49ae94485e490258dbd5c2cee1f": "c97d2c83146899bbee08b23156bf8fc9",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/543754dd9d7ac0e847a610378663511de879c0": "e97909fe4ec5efdea0473547d4a2c5e6",
".git/objects/0e/031a7a1b5173940394775c4e2b375e5acbe9f8": "d9bf066542d28a2e7f9251e4b42bbbb9",
".git/objects/0f/f86e7f1da741ed36e0f17f72fa0c9ea011dd17": "e130bc4981cef450ea15aee9e5b2a1b6",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/9e78e7c6bad5344bd30693cc3bd3aca647d7c4": "674f625d0f35e23d8cf6627e444b2471",
".git/objects/14/1e9bb2f0c564c5381797f46450b46ff5afdc7b": "da271ec46f5b053992aa763eac1093b6",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1c/7a1190a09b2604b6dca49aeee6d2e1e817cf99": "5ad60e17c163f5a3c5a6c6a55e1ec617",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/2318eac7a2c2eedaa5c3113f3c185c285a2ab2": "c926702ceb9b2153eb9103ad32854f84",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/2a2c713df7b22987b3860b625beb0944a99814": "7f66a2a32a9fab161ea001e079e222d5",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/64ce90d9d3bd65337e17e76b8f8b28227a0569": "9a64a986a0d99d394d6cf6c4b25f2b84",
".git/objects/25/7fc67951ebfc534e7474ec353e39066665b645": "6af57032a751a6b21491e82e1c9334b7",
".git/objects/2b/0f21fd27a124d401aa413a465a16b2a515dcfb": "5dd87063341c182f9fcabe994eea99f0",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/c772eaea4720cbc3aa5f2a07b8c91947263a7c": "6fecbf46ac53141adf419e83b78c3fc0",
".git/objects/32/0d8601102ecdecd87a5b02449000a3ef283c05": "140f584773b450e5895ff7780f2d37a1",
".git/objects/33/3558f507a0e46f885e522becae8e66b11d0e1b": "fd33a312558194585b2e6adac87f9b03",
".git/objects/33/a7782e659f4787d984d95feb51d723e26e8837": "54a1b1a0089382f098feea582de48fa6",
".git/objects/35/00ca04e04579fa517bd379c8f61c0b5ec72095": "13772af018e60776c5a795e33fc703e1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/f11905c5c05046c2c583cd6280a0f0e29bec93": "dc03ad07e1bb76302c7fd788fd728637",
".git/objects/36/337d3fa19cdeb4b74ab31b6f77dc1259da19a3": "c91a4f371095ffcd6abe1f2b7acee0fa",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/372f67eacc4f9fb2367d52d1e637d1c0d00dac": "6613c74e2dee9e793ab757cdaaaa8fb3",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/41/a1d2a63ce3bce5df3318a497b3a3a256609756": "0db0e18f2910058bf40ebfbe7e5d83d3",
".git/objects/4a/8d2ee91fd9d7660032d9a7dbbb696ba75aeba6": "b39b82f89b9d09bf0d29d67e3ff90170",
".git/objects/4d/1b5ec8408eb3ed45d1308440fee2e10125c869": "63c6efddf1a25ea60b9a42f6e5ed558f",
".git/objects/4e/7bda1821d0c0b8a03f8c1aa2854cddf244a07f": "2be2cc8d07cb5a6643635524639cc628",
".git/objects/50/dbe1ae36d061e527229b36e772e7bab73f703f": "43242e0d0776d84dd02d448fd96bfe37",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/9d2bec679e56bfbd0676551f2fb381e92af9b2": "2f25703616a24b6892ff8a678c94ae20",
".git/objects/51/c1df0ead3c2925bb004360f573e39ee553a8b8": "7dd5d8ff9fe3edc0967c164f1cd836b7",
".git/objects/54/30810a3a792f2f09a5adc6cfd97cfecb6a572e": "46b7d10918f2a42483b4bbbb4b799e65",
".git/objects/55/e90cb7e303bd49a8807001954d04e3f231d6d2": "a05169321702e0222cb46f4067c88b68",
".git/objects/57/a01a29ea636034c3bcbfccb500e45bd9d8a974": "ae73442cd6a846797408cee5a9fb723e",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5c/c3cce847a20e3d6b6c3b12b9f7d6cee9375a64": "a4b2c069594c16282f234f08ec58e230",
".git/objects/61/6b1e8f6c58bfe0ed41f676aa2d02c32aa6ccd5": "e355899b0c60e1680ea3857e982b9fcf",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/64/02e6d8dc3ac581e76a60234c0a414fcc9a2d54": "ed93e842cca0f14cec9b7ec636791ed7",
".git/objects/69/28a6ba570559bad01083d4c5ca8e6ce4e0cd2c": "41165059a3ff1db43ab42dba22013dcc",
".git/objects/6a/6beb9da6a871e1051fd8b23ccb8556aecb7ba2": "dad14af6eb3f736dc7560ac3bb855a29",
".git/objects/6b/789765643ef8b660016c08035a42b50720060d": "84040da680bf11e6d5d38b1a71d218fb",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/79/37c3e4a5f35deead8658c7c6bfd655c89ea26c": "a881cc65586a3baf7ea5bd91b59c8c70",
".git/objects/7c/017fe2b5367b52c926ebc5911678c6e3a20500": "8b16254d036999f25753940df1b80389",
".git/objects/82/4d262104eb5137442b84d605c8e7d289434f8f": "879811e73bb467e0a83b9d8ff57770d4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/d876eddd33b17e9c2fd1bde9d705485fc51356": "6d8ce661e74ff1d7456cd6a97a031803",
".git/objects/90/b824c8bdf36e5f3e2636ff1360877f8e09e377": "5ccfa0bbf8b561c2b5dc391b56e7594c",
".git/objects/94/b3f985ac1c2b3d3b378de556c0d28c13a3ab0b": "8b7723ab7c0d3f71b510ff400c21edc9",
".git/objects/97/8a197f653a9e770c98b3ab44fa9d0fb5854bc4": "aea8ed6604709202daaf3adf8f3ad8ea",
".git/objects/99/df28a31483d365c9be11c42782c9c408d176e0": "7707540e61ca27f7e60f8d6d778dcc00",
".git/objects/9a/2f4bdbf5f1f4184eb7e248640a994f8acdaa69": "2069d2df5660ed10e8bdd450c94fd3cf",
".git/objects/9a/d097e953832a8c6299d2f9a0b25a37ad06f510": "d3a82a1758139f12b39c49010e83bf9f",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/aa/cdcafc357bd4a619e3ebc5689194e073806b59": "8d530b16f97130f4b10d0a732818635e",
".git/objects/ab/0ea00832dd586ea4dd6bd03be1c55ff0066b17": "bf873d6b5d1884a752fd654306d4587f",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/012ec3c5a3c83d858b529aac31028fc9edf2d8": "6f7823a25843afe0755ea68071ab1125",
".git/objects/ad/f0d230212321d48f9118cac9eae7726619b2b0": "26922487d2d90a1a6314736e20fe415e",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/9a15603b803346ee77057cd88738f3cf05d809": "fb50fcd9f3a439bcbde3f66aede0098b",
".git/objects/b2/dc5289c8094730150bd848dc9c194b4ce1256c": "3f6e5167d146b25999e18f1079d2756b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f2d9b9caaf3e7c0320228ad9fcec142e525d07": "88983707cc63080921e0e8cb38524888",
".git/objects/b8/e84ba85dcdcc4009af9c1f14fb0c34752afb6a": "4fc0191ae6d80eccbc8a196ce693dee6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/db0bacd1d7aae1f4dfc422203c36203721cba3": "6d2efb62b05ebe6fc2bb642939581fff",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/fc5387550d7b20e1d681b6e8a2da956d7239cb": "2673bac9d0e1ea984913b013315ade81",
".git/objects/bd/ae7688134fdec34c127d0b3ecaf13dedd41706": "20d984bd706da84fce099bbc502c5f42",
".git/objects/c9/9b61e29a8378913940ee898c1fbb0749d66a7b": "47386e0d9fa49d30e03482134242435c",
".git/objects/cb/029dfc489c08e3daef08b0a54cdbdaa5546ff5": "86f92acffa6595a6eccc14f7c6858994",
".git/objects/cb/98f5bf3cdc11c6385d86b17b110aab27cb9f4c": "6322106506f7b450ee7e338dd6a1edd4",
".git/objects/ce/9414ea637c84ca16e7cc59164895a3222ec8d4": "2661fcce54c47497c764771eab447b36",
".git/objects/d2/24d5ee7d0cd30183e1122ad35352200c06fd7c": "1b49da4fada72a09718e4749c0e7dd00",
".git/objects/d3/a6b572449ee80d16ceb73c10e0541bb5912cbf": "dcbed6c0358a875699c5f6ba63e87ceb",
".git/objects/d3/b4fcd7bacbd9ed5f34ddeb4b462a2ad8b06937": "b182ebb59927ce2fad38ac7c1b0765c0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/03f6bff50f0b08310ad0a686e692d95825f60f": "dbfe18cfc8b926a1ed0c12c612f61a65",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/f6649b787a5e4df77f0c56487e76c77a91ab30": "74133dfdb9e4674b3038bd9f39e8ef56",
".git/objects/e1/49610c578c2e3f2b4592571828b5419d8d14a8": "a1271ab3b1a51f0ac460723c540eb28b",
".git/objects/e1/cceec890fb5cbc1a07288103e0ca5b0a13daf6": "fda389cbd19a83b03579b389703eaef6",
".git/objects/e4/51ad3c487d5e5889b0f0278ba257c0b7fb13b7": "4bc7d76bc7794812c6e048088c634078",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e6/961d1be6b0bf1a2e5ca5e33a7974ae1618b7ce": "d7e0936cf52d5e2c5b3570f435d2e003",
".git/objects/e8/4df0014a984c9ff211ecfd3485c0eb2563a6dd": "aefcad55fa59454439001d92df805480",
".git/objects/e8/dc583fda5820f73b3d36485436fe40de034625": "9b9005870521ffc22ef9ac3de9c1b180",
".git/objects/e9/f83d1f8fa467cdc50c25aaab52955ce05cc19e": "a716c8a4a3eed040dbe570325564cd12",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/5ec0d413927e6f8168cdecfc72a5e4a8625aa9": "1881c9405c026ba4ba35c8300868fb01",
".git/objects/f2/7caa68bd720857af6b9bd74224b5e999e3fa81": "b6bf928d595dd2fed825ea6e123c899f",
".git/objects/f3/a0a98543d3fcad02bb953800fcaeedd631384e": "de1fac939d6a311503688f62aa52aa8d",
".git/objects/f4/fb362ce548d20fa325ce36cc8fde9e222a9e56": "32649c4e49d7dc7b8313fcaae76837c1",
".git/objects/f5/520a4322909287dba772d5ea1d1e692b56be3b": "edd39db510bf802df71b93b216906d46",
".git/objects/f6/55c934eab272bf0977eb54b05dc96720a21db3": "e99b8a07de94289bc19da4e525865144",
".git/objects/f6/67943c87ee6393ed352d740a3bf6e83560df8c": "c2930ccc37a303fa8a83e84f7b3066df",
".git/objects/f6/ecdd9c2281c2ffadc0aaf6052e11c7060a6056": "50802c8851d11ac0235878021f36479c",
".git/objects/f8/10a6f681a4ac3493e8ba87b06b98f42e39c8ae": "acb24116423d0d701939353d897cd728",
".git/objects/fb/3683a62c57d22444f75b72799d8570deb9ef20": "4df3d1019ab36ee3acd0ced812e8388e",
".git/objects/fc/c6b6e963d936786f44287becba864a02232c4b": "b7a8bdf75f3aa60861f12b4221abf821",
".git/objects/pack/pack-95ff3225e399eb3ffa55bb7188c2595074b00602.idx": "e9375c95cc44ed3093a6e73c110d586b",
".git/objects/pack/pack-95ff3225e399eb3ffa55bb7188c2595074b00602.pack": "8232b0883658ebfc0277d0c282aae873",
".git/ORIG_HEAD": "8b7152236ecc30a5c40ab00f519f01ae",
".git/refs/heads/main": "8b7152236ecc30a5c40ab00f519f01ae",
".git/refs/remotes/origin/main": "ff0f8b046f76b88eeb71922672335d10",
"assets/AssetManifest.bin": "2aade217ab580780cf5943236198cee5",
"assets/AssetManifest.json": "7e522ba8751c27bac309916799a014a6",
"assets/assets/fonts/EpilogueBlack.ttf": "bb7e14657d41eaa0f322cf699bbc8cde",
"assets/assets/fonts/EpilogueBold.ttf": "1e4aa6f11ceffffd7739bbb4f64b2cd0",
"assets/assets/fonts/EpilogueExtraBold.ttf": "87b909ffd2d2d62186a01abd14b51f12",
"assets/assets/fonts/EpilogueRegular.ttf": "f546312a3011bd04c5d3833522f42046",
"assets/assets/icons/desktop_icon.png": "b9d3f69039b420c6d2c384a0ec0709eb",
"assets/assets/icons/img_call.svg": "9e8d71d3eb56fa08424aa45d29d58754",
"assets/assets/icons/img_camera.svg": "c112604986cee145a2e19a28100f2cba",
"assets/assets/icons/img_checkmark.svg": "ada65ef58de956e4389de851087c6199",
"assets/assets/icons/img_checkmark_white_a700.svg": "c10a3661cd7522b50e24a3247353bbc2",
"assets/assets/icons/img_facebook.svg": "ffdbfa46b356cf4fe3a0c0704b311fdb",
"assets/assets/icons/img_group32.svg": "339b943503a8b3e25eb3752d819e94ec",
"assets/assets/icons/img_home.svg": "10fa483d85231e3b0fafe536e74240c6",
"assets/assets/icons/img_laptop.svg": "168e59a25f48705c277f98887e56c3c1",
"assets/assets/icons/img_lightbuttonprimaryicon.svg": "8f072ca4e51dcbf4e546551152361b37",
"assets/assets/icons/img_location.svg": "58752c87e86daa3ceebad9a1b924b258",
"assets/assets/icons/img_menu.svg": "a05b730c12880e69a12be1c54f308d14",
"assets/assets/icons/img_oval.png": "2b6ce27b00603c1958c868e3ff9dd24b",
"assets/assets/icons/img_oval_1.png": "0102c9ec813c10bf16f6c62209e2c395",
"assets/assets/icons/img_oval_80x80.png": "aaa824a4a85e47f6dba9151b47ed731d",
"assets/assets/icons/img_overlay.png": "91e78b920888fd250977df7a42b0fbd7",
"assets/assets/icons/img_overlay_1.png": "91e78b920888fd250977df7a42b0fbd7",
"assets/assets/icons/img_overlay_224x329.png": "91e78b920888fd250977df7a42b0fbd7",
"assets/assets/icons/img_plus.svg": "ba2bd09bd98d4f5b158247596e856fb5",
"assets/assets/icons/img_shape.svg": "733ae5969b79005039b8477f9f0664ed",
"assets/assets/icons/img_shape_white_a700.svg": "5dd3df04170358c845759993cc4adbde",
"assets/assets/icons/img_star.svg": "2a3c0c1c6aca9da080ce7a63ed96e618",
"assets/assets/icons/img_trash.svg": "c122f1e5a14de576192c9d98589b7ca5",
"assets/assets/icons/img_trash_white_a700.svg": "bcdb374715a47c822d95a02e03d0bcef",
"assets/assets/icons/img_triangle.svg": "6d16535dc7e71f1d029feed1365c7492",
"assets/assets/icons/img_twitter.svg": "216989e44402d344d91085e8e8991c15",
"assets/assets/portfolio/app_images/advice1.jpg": "bd656cdb01ca97c9f7f7ae26b7784908",
"assets/assets/portfolio/app_images/advice2.jpg": "2b2d683a8437b4b9caaebe046c99e8d2",
"assets/assets/portfolio/app_images/advice3.jpg": "591c5deafa0dac8020fa37f666cdec4c",
"assets/assets/portfolio/app_images/calc1.jpg": "d99a6c4d160633ee967a8dbcdd054c2a",
"assets/assets/portfolio/app_images/calc2.jpg": "eafa0c9ce6e7d49199c2ae383c8989a8",
"assets/assets/portfolio/app_images/calc3.jpg": "3d978c473e07633004dec45b9b9c1d92",
"assets/assets/portfolio/app_images/calc4.jpg": "d22a6f6ea4a485e37219ab7f5ad16e36",
"assets/assets/portfolio/app_images/foodly1.png": "0e4b78715bdf105e5fa33d3444e2e438",
"assets/assets/portfolio/app_images/foodly2.png": "b99ae0fe0c4505c686d5c45f7a7ef43d",
"assets/assets/portfolio/app_images/foodly3.png": "e670d7909bf0fff0a9ab75266009c5ac",
"assets/assets/portfolio/app_images/foodly4.png": "0e4b78715bdf105e5fa33d3444e2e438",
"assets/assets/portfolio/app_images/mk1.jpg": "fc577f985aa5e24212c2e56168925998",
"assets/assets/portfolio/app_images/mk2.jpg": "753d87f8145ed1313a4ddd76e9b7a839",
"assets/assets/portfolio/app_images/mk3.jpg": "2404e8497a611e77c1a697303e37e8d3",
"assets/assets/portfolio/app_images/mk4.jpg": "d8ffff5733a4d382636ea0791b77dcb7",
"assets/assets/portfolio/app_images/mk5.jpg": "a84c68ce28d9174d596494365bd34d1d",
"assets/assets/portfolio/app_images/musica1.png": "ea3cb1208b1de679f6a63371b1735d3d",
"assets/assets/portfolio/app_images/musica2.png": "db2fdcac20666ef8010161de7af238a4",
"assets/assets/portfolio/app_images/musica3.png": "301ec00eec33a17ba726db6d34eebc49",
"assets/assets/portfolio/app_images/musica4.png": "83cdb73e337b3145327bc184c2e23033",
"assets/assets/portfolio/app_images/musica5.png": "38f428fa1e296ca8da54baed599a6780",
"assets/assets/portfolio/app_images/musica6.png": "cdae89999df7968499fd82ae89262b69",
"assets/assets/portfolio/app_images/pcast1.png": "fb642345d26df98269c9aa7f948788ff",
"assets/assets/portfolio/app_images/pcast2.png": "95ead5d9b1185bb00fe277495e71fbb5",
"assets/assets/portfolio/app_images/pcast3.png": "5765fca6972cd31e8ee41f7f7e14dec3",
"assets/assets/portfolio/app_images/pcast4.jpg": "a67f5c1b5c1e00b43e0a3e91604d9557",
"assets/assets/portfolio/app_images/pcast5.png": "6ce181815e7b7cc2ce4c089d1c30cf10",
"assets/assets/portfolio/app_images/pcast6.png": "5735dd0b4bdf3a41051eeb3c2ac9a1f9",
"assets/assets/portfolio/app_images/rps1.jpg": "d7cba8c428026d059dfb17a4c4722285",
"assets/assets/portfolio/app_images/rps2.jpg": "90ddd4f192e44b306899434d74a0b4ac",
"assets/assets/portfolio/app_images/rps3.jpg": "2c4aa4f79af48fc89f3136ab7a3ee962",
"assets/assets/portfolio/app_images/rps4.jpg": "336659bf96b20d1ef05c54ddacb847e7",
"assets/assets/portfolio/app_images/rps5.jpg": "ba61c8127fce7ce337858759c35247b0",
"assets/assets/portfolio/logo.jpg": "1af699315d4f238615260e0f9e2db0c3",
"assets/assets/portfolio/me.jpg": "1236c21d23edf04bbdc01a0cd0344c42",
"assets/assets/portfolio/p1.jpg": "99ef3f96757299f501c684b0dcff1c73",
"assets/assets/portfolio/p2.jpg": "e8aee61985c829418a1317deab857a07",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0560fe676df6feb32995baa3877fd51e",
"assets/NOTICES": "720044370cbc0cdeaf233db875dfc254",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2108969be549733912e88a222430fd0d",
"/": "2108969be549733912e88a222430fd0d",
"main.dart.js": "311c7965f19165747df79e66467fdd8b",
"manifest.json": "cc2e96c3da56a63cd75ff248335d5cf7",
"version.json": "62011b3cf4966769a962204fcd839f68"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
