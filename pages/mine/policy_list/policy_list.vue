<template>
	<view>
		<view class="pl-title">
			政策列表
		</view>
		<view class="pl-list">
			<view class="pl-list-li" v-for="(item, index) in policyGroupList" :key="item.id">
				<navigator :url='"./share_profit?gid=" + item.id'>
					{{ item.title }}
					<image src="@/static/EPOS/jiantou.png" mode="widthFix" class="arrow-r"></image>
				</navigator>
			</view>
		</view>
		
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
				loadModal: {
					show: false,
					text: '加载中...'
				},
				policyGroupList: []
			}
		},
		
		onLoad() {
			this.loadModal.show = true;
			this.getPolicyGroupList();
		},
		methods: {
			getPolicyGroupList(){
				net({
					url:"/V1/get_logon_user_policy_group",
					method:'get',
					success: (res) => {
						// console.log(res);
						this.loadModal.show = false;
						if (res.data.success) {
							this.policyGroupList = res.data.success.data
						}
		            }
		      	})
			}
		}
	}
</script>

<style>
	page { background-color: #f7f7f7; }
	.pl-title { height: 100rpx; line-height: 100rpx; padding-left: 3%; }
	.pl-list { width: 94%; margin: 0 auto; background-color: #fff; border-radius: 8rpx; border: 1px solid #eee; }
	.pl-list-li { height: 104rpx; line-height: 104rpx; padding-left: 3%; position: relative; }
	.arrow-r { width: 32rpx; height: 32rpx; position: absolute; top: 32rpx; right: 3%;}
	.pl-list-li+.pl-list-li {  border-top: 1px solid #eee; }
</style>
