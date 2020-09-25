<template>
	<view>
		<view class="sousuo">
			<view class="sousuo-view">
				<image class="input-image" src="/static/public/left_fdj.png" mode="aspectFit"></image>
				<input class="input" placeholder="请输入商户法人姓名" />
			</view>
		</view>
		<radio-group @change="getTermNum">
			<view class="view" v-if="mechList.length != 0">
				<label class="term-info" v-for="(item, index) in mechList" :key="index">
					<view class="checkbox-view">
						<text class="checkbox-text">商户名称：{{ item.name }}</text>
						<text class="checkbox-text">商户编号：{{ item.code }}</text>
					</view>
					<view class="checkbox-view-radio">
						<radio class="checkbox" color="#f98021" v-model="item.code" />
					</view>
					<view class="xian"></view>
				</label>
			</view>
			<view class="public-empty-tips" style="padding-top: 100rpx;" v-if="mechList.length == 0">
				没有要绑定的商户信息~
			</view>
		</radio-group>

		<button class="term-define" @click="define">确定</button>

		<view class="cu-load load-modal" v-if="loadModal.show">
			<image src="/static/public/loading.png" mode="aspectFit"></image>
			<view class="gray-text">{{ loadModal.text }}</view>
		</view>
	</view>
</template>

<script>
	
	import net from '@/common/net.js';

	export default {
		data() {
			return {
				loadModal: { show: false, text: '加载中...' },
				// 商户列表
				mechList: [],
				// 商户编号
				merch_no: '',
			};
		},

		onLoad() {
			this.loadModal.show = true;
			// 获取商户信息
			this.getMechList();
		},

		methods: {
			// 获取商户信息
			getMechList() {
				net({ url: "/V1/getNoBindMerchant", method: 'get',
					success: (res) => {
						console.log(res)
						this.loadModal.show = false;
						if (res.data.success && res.data.success.data)
							this.mechList = res.data.success.data;
						else
							uni.showToast({ title: res.data.error.message, icon: 'none' });
					},
					error: (res) => {
						this.loadModal.show = false;
					}
				})
			},

			// 获取radio选中的值
			getTermNum(e) {
				this.merch_no = e.detail.value;
			},

			define() {
				var pages 		= getCurrentPages();
				var prevPage 	= pages[pages.length - 2]; //上一个页面
				prevPage.$vm.merch_no = this.merch_no;
				uni.navigateBack();
			}
		}
	};
</script>

<style lang="scss">
	@import "@/pages/home/style/term_opt.scss";
</style>
